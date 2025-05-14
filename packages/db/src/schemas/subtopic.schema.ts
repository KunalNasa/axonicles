import { Schema } from "mongoose";

export const subtopicSchema = new Schema({
    title: {
      type: String,
      required: [true, "Subtopic title is required"],
    },
    resources: {
      type: String,
    },
  })