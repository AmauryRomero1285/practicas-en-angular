import { model, Schema } from "mongoose";
import moment from "moment-timezone";

const userSchema = new Schema(
  {
    _id: { type: String, required: true },
    username: String,
    email: String,
    password: {
      required: true,
      unique: true,
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    createdAt: {
      type: Date,
      default: moment.tz("America/Mexico_City").format(),
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("User", userSchema);
