import {z} from "zod"

export const generateRoadmapSchema = z.object({
    prompt: z.string().min(4).max(2000),
    duration: z.number(),
    title: z.string().min(2).max(500),
    userId: z.string()
})