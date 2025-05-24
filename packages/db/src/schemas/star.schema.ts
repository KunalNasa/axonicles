import { Star } from "@axonicles/types/index";
import mongoose, { Schema } from "mongoose";

export const StarSchema = new Schema<Star>({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide a valid userId who has starred this roadmap."]
    },
    roadmapId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide a valid roadmapId who for this roadmap."]
  
    }
  }, {
    timestamps : true
});