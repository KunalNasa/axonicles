import { TaskSchema } from "./task.schema";
import z from "zod";

export const RoadmapSchema = z.array(TaskSchema);
