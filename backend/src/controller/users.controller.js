import userData from "../data/users.data.js";
import sessionsData from "../data/sessions.data.js";
import { hashPassword } from "../helpers/tokens.js";
import bcrypt from "bcryptjs";
import moment from "moment-timezone";

// Temporarily update sessions
const checkAndRenewSession = async (sessionId) => {
  const session = await sessionsData.findSession(sessionId);

  if (session && session.status === "active") {
    const lastActivity = moment(session.updatedAt);
    const now = moment();

    // Verificar si han pasado más de 2 minutos desde la última actividad
    const inactivityDuration = now.diff(lastActivity, 'minutes');

    if (inactivityDuration > 2) {
      // Si han pasado más de 2 minutos, marcar la sesión como inactiva
      await sessionsData.updatedSession(sessionId, { status: 'inactive' });
      console.log(`Session ${sessionId} marked as inactive due to inactivity.`);
    } else {
      // Extiende la sesión si sigue activa
      const newExpiration = now.add(2, "minutes").toDate();
      await sessionsData.updatedSession(sessionId, { expiresAt: newExpiration });
    }
  }
};

// Registrar usuario
const insertUser = async (req, res) => {
  const { username, email, password, verifyPassword } = req.body;

  if (!username || !email || !password || !verifyPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Verificar la contraseña
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }
    if (password !== verifyPassword) {
      return res
        .status(400)
        .json({ message: "Passwords do not match, try again" });
    }

    // Verificar si el correo ya está registrado
    const emailExists = await userData.findByEmail(email);
    if (emailExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hashear la contraseña
    const hashedPassword = hashPassword(password);

    // Crear el usuario
    const newUser = await userData.createUser({
      username,
      email,
      password: hashedPassword,
    });

    if (!newUser) {
      return res.status(500).json({ message: "Error creating user" });
    }

    // Extraer datos de usuario
    const { username: createdUsername, _id } = newUser;

    // Crear la sesión
    const user = {
      userId: _id,
      username: createdUsername
    };

    const newSession = await sessionsData.createSession(user);

    if (!newSession) {
      return res.status(500).json({ message: "Error creating session" });
    }

    // Retornar respuesta exitosa
    return res.status(201).json({
      message: "User created successfully",
      newUser,
      newSession,
    });
  } catch (error) {
    console.error("Error: ", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

// Iniciar sesión de usuario
const loginUser = async (req, res) => {
  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Buscar usuario por email o username
    const userFound = await userData.findUser(user);
    if (!userFound) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verificar la contraseña
    const passwordMatch = await bcrypt.compare(password, userFound.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    // Obtener la sesión actual del usuario
    const currentSession = await sessionsData.findSession(userFound._id);

    if (currentSession) {
      if (currentSession.status === "active") {
        return res.status(400).json({ message: "User is already logged in" });
      } else if (currentSession.status === "inactive") {
        return res.status(400).json({
          message: "Session is inactive. Reactivate your session.",
        });
      } else if (currentSession.status === "pending") {
        if (!userFound.isVerified) {
          return res.status(400).json({
            message:
              "Account verification required. Please verify your account.",
          });
        }
      }
    }

    // Iniciar la sesión
    const updatedSession = await sessionsData.updatedSession(userFound._id, {
      status: "active",
      count: (userFound.count || 0) + 1,
      updatedAt: new Date(),
    });

    if (!updatedSession) {
      return res.status(500).json({ message: "Error updating session" });
    }

    // Start session expiration
    await checkAndRenewSession(updatedSession._id);

    return res.status(200).json({
      message: "User logged in successfully",
      user: userFound.username,
      session: updatedSession,
    });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

// Función para reactivar una sesion
const activateSession = async (req, res) => {
  const { user, password } = req.body;
  try {
    // Buscar usuario por email o username
    const userFound = await userData.findUser(user);
    if (!userFound) {
      return res.status(404).json({ message: "User not found" });
    }
    // Verificar la contraseña
    const passwordMatch = await bcrypt.compare(password, userFound.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }
    const userId=userFound._id;
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // Buscar la sesión del usuario
    const session = await sessionsData.findSession(userId);
    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    // Verificar si la sesión está inactiva
    if (session.status !== "inactive") {
      return res
        .status(400)
        .json({ message: "Session is not inactive, cannot activate" });
    }

    // Activar la sesión
    const activatedSession = await sessionsData.updatedSession(userId, {
      status: "active",
      count: (session.count || 0) + 1,
      updatedAt: new Date(),
    });

    if (!activatedSession) {
      return res.status(500).json({ message: "Error activating session" });
    }
    // Start session expiration
    await checkAndRenewSession(activatedSession._id);

    return res.status(200).json({
      message: "Session activated successfully",
      session: activatedSession,
    });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

// Show all sessions
const showSessions = async (req, res) => {
  try {
    const sessions = await sessionsData.showSessions({status:'active'});
    if (!sessions) {
      return res.status(404).json({ message: "Sessions not found" });
    }
    return res.status(200).json({ sessions });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export default {
  insertUser,
  loginUser,
  activateSession,
  showSessions,
};
