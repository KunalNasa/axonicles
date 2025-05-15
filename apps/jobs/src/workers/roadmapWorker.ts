import { Worker } from "bullmq";
import { queueMaps, RedisConnection } from "@axonicles/lib/lib";

const jobHandler = async () => {
    console.log("Handling the job handler");
}

export const worker = new Worker(queueMaps.roadmapQueue!, jobHandler, { connection: RedisConnection });

