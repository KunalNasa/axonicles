import {z} from "zod"

export const searchSchema = z.object({
    searchString : z.string().min(2, "Please enter a valid search").max(200, "Too long search!!")
})