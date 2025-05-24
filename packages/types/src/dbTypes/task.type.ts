import { Subtopic } from "./subtopics.type";

// Task interface
export interface Task {
    // _id: string; // Unique task ID
    title: string; // Task title
    duration: number; // Duration of the task (in hours/days)
    subtopics: Subtopic[]; // Subtopics covered
    is_completed: boolean; // Completion status
    // prerequisites: string[]; // Prerequisites
    startDate? : Date | null // when user has started this task
    endDate?: Date | null // When this roadmap should be completed by user.
    progress?: Number
}