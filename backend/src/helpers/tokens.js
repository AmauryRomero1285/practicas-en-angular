import User from "../models/User.js";
import Session from "../models/Session.js";
import bcrypt from "bcryptjs";

//generate new ID
const generateID = () => {
  return (
    Math.floor(100000 + Math.random() * 100000) +
    Date.now().toString().slice(-5)
  );
};
//check if _id exists
const generateUniqueId = async () => {
  let newId;
  let exists = true;

  while (exists) {
    newId = generateID();
    exists = await User.exists({ _id: newId });
  }
  return newId;
};
//hash password
const salt = bcrypt.genSaltSync(10);
const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};
//generate session Id
const generateSessionId = () => {
  return (
    Math.floor(100000 + Math.random() * 100000) +
    Date.now().toString().slice(-5)
  );
};
//check if session Id exists
const generateSessionUniqueId = async () => {
  let newId;
  let exists = true;

  while (exists) {
    newId = generateSessionId();
    exists = await Session.exists({ _id: newId });
  }
  return newId;
};

export {
   generateUniqueId,
   hashPassword, 
   generateSessionUniqueId,
};
