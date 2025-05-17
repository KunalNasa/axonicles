import z from "zod";

export const subtopicDescriptionSchema = z.record(z.string(), z.string());