import { Job, Worker } from "bullmq";
import { logger, queueMaps, RedisConnection } from "@axonicles/lib/index";
import dotenv from "dotenv"

import { connectDB, RoadmapModel } from "@axonicles/db/index";
import { Roadmap } from "@axonicles/types/index";
import { Generator } from "../lib/Generator";
import { generatorLogger } from "../lib/generatorLogger";


dotenv.config();

const jobHandler = async (job: Job) => {
    console.log("Worker called");
    const startTime = Date.now();
    const { prompt, title, duration, userId } = job.data;
    const myGenerator = new Generator;
    let finalRoadmapStruct: Roadmap | null = null;
    try {
        finalRoadmapStruct = await myGenerator.generateRoadmapStructure(prompt, title, duration, userId);
    } catch (error: any) {
        generatorLogger.warn("Failed to generate final roadmap structure", error);
        throw new Error(error.message);
    }
    const descriptionMap: Map<string, string> = await myGenerator.generateDescriptions(finalRoadmapStruct!);

    finalRoadmapStruct?.tasks.map(task => {
        task.subtopics.map(sub => {
            const description = descriptionMap.get(sub.title);
            sub.description = description;
        })
    });
    generatorLogger.info("Roadmap constructed successfully with all details.");

    try {
        await connectDB();
        const saveRoadmap = await RoadmapModel.insertOne(finalRoadmapStruct);
        if (saveRoadmap) {
            generatorLogger.info("Roadmap saved to the DB successfully");
        }
    } catch (error) {
        generatorLogger.error("DB error occured", error);

    }
    const endTime = Date.now();
    const diff = endTime - startTime;
    logger.debug("Time Taken to complete job", diff);
}

export const worker = new Worker(queueMaps.roadmapQueue!, jobHandler, { connection: RedisConnection, removeOnComplete: {count : 0},  removeOnFail: { count: 100 } });

