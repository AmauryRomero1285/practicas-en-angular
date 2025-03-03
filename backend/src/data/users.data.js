import User from "../models/User.js";
import { generateUniqueId } from "../helpers/tokens.js";

const userData = {};

// Create a new user
userData.createUser = async (user) => {
  const Id = await generateUniqueId();
  return await User.create({
    _id: Id,
    ...user,
  });
};

// Find user by email
userData.findByEmail = async (email) => {
  return User.findOne({ email: email });
};
//find user
userData.findUser = async (user) => {
  return User.findOne({
    $or: [{ email: user }, { username: user }], 
  });
};

export default userData;
