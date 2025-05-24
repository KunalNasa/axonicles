import { Schema } from "mongoose";
import { User } from "@axonicles/types/index";

// User Schema
export const UserSchema = new Schema<User>({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please use a valid email address",
    ],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique: true,
  },
  profile_picture: {
    type: String,
    default: "",
  },
  bio: {
    type: String,
    default: "",
  },
  portfolio: {
    type: String,
    default: "",
  },
  github: {
    type: String,
    default: "",
  },
  linkedIn: {
    type: String,
    default: "",
  },
  other_links: {
    type: [String],
    default: [],
  },
  interests: {
    type: [String],
    default: [],
  },
  goal: {
    type: String,
    default: "",
  },
  profession: {
    type: String,
    default: "",
  },
  progress: {
    type: Number,
    default: 0,
  },
  roadmaps: {
    type: [Schema.Types.ObjectId], // assuming roadmaps are documents
    ref: "Roadmap",
    default: [],
  },
}, {
  timestamps: true 
});
