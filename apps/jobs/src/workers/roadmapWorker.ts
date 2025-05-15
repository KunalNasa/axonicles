import { Job, Worker } from "bullmq";
import { queueMaps, RedisConnection, gemini } from "@axonicles/lib/lib";
import dotenv from "dotenv"
import { PromptConstruct } from "../lib/promptConstructor";
import { DataTransformer } from "../lib/DataTransformer/DataTransformer";
import { JsonParser } from "../lib/DataTransformer/JsonParser";
import { RoadmapValidator } from "../lib/DataTransformer/RoadmapValidator";
import { RoadmapEnricher } from "../lib/DataTransformer/RoadmapEnricher";

dotenv.config();

const jobHandler = async ( job : Job) => {
    const { userPrompt, roadmapTitle, roadmapDuration, owner} = job.data;
    const promptConstructor = new PromptConstruct(userPrompt, roadmapTitle, roadmapDuration);

    const myprompt = promptConstructor.constructInitialPrompt();

    const geminiResponse = await gemini(myprompt);

    const transformer = new DataTransformer(
        new JsonParser(),
        new RoadmapValidator(),
        new RoadmapEnricher()
    );
    const finalRoadmap = transformer.transform(geminiResponse, {title: roadmapTitle, duration : roadmapDuration, owner: owner});
    console.log(finalRoadmap);

}

export const worker = new Worker(queueMaps.roadmapQueue!, jobHandler, { connection: RedisConnection });

