import { z } from "zod";

export const SubtopicSchema = z.object({
  title: z.string(),
  duration: z.number(),
  prerequisites: z.array(z.string())
});
