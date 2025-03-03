const sessionsData = {};
import Session from "../models/Session.js";
import { generateSessionUniqueId } from "../helpers/tokens.js";

// Create a new session
sessionsData.createSession = async (session) => {
  const sessionId = await generateSessionUniqueId();
  return await Session.create({
    _id: sessionId,
    ...session,
  });
};

//Updated session
sessionsData.updatedSession = async (userId, session) => {
  try {
    const updatedSession = await Session.findOneAndUpdate(
      { userId: userId },
      session,
      { new: true, useFindAndModify: false }
    ).lean();

    return updatedSession;
  } catch (error) {
    console.error("Error al actualizar la sesión:", error);
    return null;
  }
};

//find session
sessionsData.findSession = async (userId) => {
  try {
    const session = await Session.findOne({ userId: userId }).lean();
    return session;
  } catch (error) {
    console.error("Error al buscar la sesión:", error);
    return null;
  }
};

//Show all sessions
sessionsData.showSessions = async (status) => {
  return await Session.find(status);
};

export default sessionsData;
