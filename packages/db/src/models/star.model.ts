import mongoose, { Schema } from "mongoose";
import { Star } from "@axonicles/types/index"
import { StarSchema } from "../schemas/star.schema";

export const StarModel = (mongoose.models.Star as mongoose.Model<Star>) || mongoose.model<Star>("Roadmap", StarSchema);
