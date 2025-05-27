import mongoose, { Mongoose, Schema } from "mongoose";
import { Roadmap } from "@axonicles/types/index"
import { TaskSchema } from "../schemas/task.schema";



// Roadmap Schema
// ideally it should be in schemas folder but fine for now.
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
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required : [true, "Owner must be mentioned"]
  },
  superOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required : [true, "Super owner must be mentioned"]
  },
  expectedDuration : {
    type: Number,
    required: [true, "Must mention expected duration"]
  },
  // or prompt
  description: {
    type : String,
    required: [true, "Please add a valid description for a roadmap"]
  },
  keywords: {
    type:  [String],
    default: []
  },
  startDate: {
    type : Date,
    default: null
  },
  starCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps : true
});

export const RoadmapModel = (mongoose.models.Roadmap as mongoose.Model<Roadmap>) || mongoose.model<Roadmap>("Roadmap", RoadmapSchema);
