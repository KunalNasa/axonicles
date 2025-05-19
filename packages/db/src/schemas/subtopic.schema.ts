import { Schema } from "mongoose";
import { Subtopic } from "@axonicles/types/types";

export const subtopicStatusEnum = {
    done: "Done",
    progress: "In Progress",
    Pending: "Pending"
}

export const subtopicSchema = new Schema<Subtopic>({
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
    duration: {
      type: Number,
      default: 1
    },
    status: {
        type: String,
        enum: Object.values(subtopicStatusEnum),
        default: subtopicStatusEnum.Pending
    },
    prerequisites: {
      type: [String],
      default: [],
    },
})