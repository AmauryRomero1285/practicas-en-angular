import userData from "../data/users.data.js";
import sessionsData from "../data/sessions.data.js";
import { hashPassword } from "../helpers/tokens.js";

const insertUser = async (req, res) => {
  const { username, email, password, verifyPassword } = req.body;

  if (!username || !email || !password || !verifyPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Verify password
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

    // Verify email
    const emailExists = await userData.findByEmail(email);
    if (emailExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password
    const hashedPassword = hashPassword(password);

    // Create user
    const newUser = await userData.createUser({
      username,
      email,
      password: hashedPassword,
    });

    if (!newUser) {
      return res.status(500).json({ message: "Error creating user" });
    }

    // Extract username and _id for session
    const { username: createdUsername, _id } = newUser;

    // Create session
    const user = {
      userId: _id,
      username: createdUsername,
    };

    const newSession = await sessionsData.createSession(user);

    if (!newSession) {
      return res.status(500).json({ message: "Error creating session" });
    }

    // Return success response
    return res.status(201).json({
      message: "User created successfully",
      newUser,
      newSession,
    });
  } catch (error) {
    console.error("Error: ", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

export default {
  insertUser,
};
