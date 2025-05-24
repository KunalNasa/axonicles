import mongoose from "mongoose";
import { UserSchema } from "../schemas/user.schema";
import { User } from "@axonicles/types/index";


// Exporting User model
export const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

