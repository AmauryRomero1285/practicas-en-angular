import { model, Schema } from "mongoose";
import moment from "moment-timezone";

const sessionSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
    status: {
      type: ["active", "inactive", "expired", "loggedOut"],
      default: "inactive",
    },
    count: {
      type: Number,
      default: 0,
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

export default model("Session", sessionSchema);
