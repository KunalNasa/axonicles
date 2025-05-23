import mongoose, { Schema } from "mongoose";
import { Roadmap } from "@axonicles/types/types"
import { TaskSchema } from "../schemas/task.schema";



// Roadmap Schema
export const RoadmapSchema = new Schema<Roadmap>({
  title: {
    type: String,
    required: [true, "Roadmap title is required"],
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, "Roadmap duration is required"],
  },
  tasks: {
    type: [TaskSchema],
    default: [],
  },
  progress: {
    type: Number,
    default: 0,
  },
  generated_by: {
    type: String,
    default: "Gemini AI",
  },
  owner: {
    type: String,
    ref: "User",
    required : [true, "Owner must be mentioned"]
  },
  superOwner: {
    type: String,
    ref: "User",
    required : [true, "Super owner must be mentioned"]
  },
  expectedDuration : {
    type: Number,
    required: [true, "Must mention expected duration"]
  }
}, {
  timestamps : true
});

export const RoadmapModel = (mongoose.models.Roadmap as mongoose.Model<Roadmap>) || mongoose.model<Roadmap>("Roadmap", RoadmapSchema);
