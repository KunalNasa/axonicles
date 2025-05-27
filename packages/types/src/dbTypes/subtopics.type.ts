export interface Subtopic {
    title: string;
    resources?: Array<string> | [];
    description?: string;
    duration?: number;
    status?: "Done" | "In Progress" | "Pending";
    prerequisites?: string[];
  }
  