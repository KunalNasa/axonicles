import { Job, Worker } from "bullmq";
import { queueMaps, RedisConnection, gemini } from "@axonicles/lib/lib";
import dotenv from "dotenv"

dotenv.config();

const jobHandler = async ( job : Job) => {
    console.log(job.data);
    const geminiRes = await gemini(JSON.stringify(job.data));

    console.log("Gemini Response is ",geminiRes);

    console.log("Handling the job handler");
}

export const worker = new Worker(queueMaps.roadmapQueue!, jobHandler, { connection: RedisConnection });

