const sessionsData={};
import Session from "../models/Session.js";
import { generateSessionUniqueId } from "../helpers/tokens.js";

// Create a new session
sessionsData.createSession = async (session) => {
    const sessionId=await generateSessionUniqueId();
    return await Session.create({
        _id: sessionId ,
        ...session,
    }); 
}


export default sessionsData;