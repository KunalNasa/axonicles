import { Task } from "./task.type";


// Roadmap interface
export interface Roadmap {
    _id?: string; // Unique roadmap ID
    title: string; // Roadmap title
    duration: number; // Duration in days
    tasks: Task[]; // Embedded array of tasks
    progress: number; // Roadmap progress percentage
    generated_by: string; // Roadmap generator src
    owner: string; // Who owns the roadmap
    superOwner: string; // Who actually generated the roadmap
    expectedDuration : number // in how many days are we expecting it's completion based on user's progress
}