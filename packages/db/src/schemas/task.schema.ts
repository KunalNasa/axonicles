import { Task } from "@axonicles/types/index";
import { Schema } from "mongoose";
import { subtopicSchema } from "./subtopic.schema";



// Task Schema
export const TaskSchema = new Schema<Task>({
  title: {
    type: String,
    required: [true, "Task title is required"],
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, "Task duration is required"],
  },
  subtopics: {
    type: [subtopicSchema],
    default: [],
  },
  is_completed: {
    type: Boolean,
    default: false,
  },
  startDate : {
    type : Date,
    default: null
  },
  endDate : {
    type : Date,
    default: null
  },
  progress: {
    type: Number,
    default: 0
  }
});

