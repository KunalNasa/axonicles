import { Schema } from "mongoose";

export const subtopicStatusEnum = {
    done: "Done",
    progress: "In Progress",
    pending: "Is Pending"
}

export const subtopicSchema = new Schema({
    title: {
      type: String,
      required: [true, "Subtopic title is required"],
    },
    resources: {
      type: String,
    },
    description: {
        type : String
    },
    status: {
        type: String,
        enum: Object.values(subtopicStatusEnum),
        default: subtopicStatusEnum.pending
    }
  })