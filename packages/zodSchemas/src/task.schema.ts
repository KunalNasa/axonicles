import { z } from "zod";
import { SubtopicSchema } from "./subtopic.schema";



export const TaskSchema = z.object({
  title: z.string(),
  duration: z.number(),
  subtopics: z.array(SubtopicSchema)
});
