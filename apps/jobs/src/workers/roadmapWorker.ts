import { Job, Worker } from "bullmq";
import { queueMaps, RedisConnection, gemini } from "@axonicles/lib/lib";
import dotenv from "dotenv"
import { PromptConstruct } from "../lib/promptConstructor";
import { DataTransformer } from "../lib/DataTransformer/DataTransformer";
import { JsonParser } from "../lib/DataTransformer/JsonParser";
import { RoadmapValidator } from "../lib/DataTransformer/RoadmapValidator";
import { RoadmapEnricher } from "../lib/DataTransformer/RoadmapEnricher";
import { Roadmap } from "@axonicles/types/types";
import { fillDescriptions } from "../lib/FillDescriptions";
import { connectDB, RoadmapModel } from "@axonicles/db/dbClient";
import { myRoadmap } from "../sample";
import { resolveResponse } from "@trpc/server/unstable-core-do-not-import";

dotenv.config();

const jobHandler = async ( job : Job) => {
    // const { userPrompt, roadmapTitle, roadmapDuration, owner} = job.data;
    // const promptConstructor = new PromptConstruct;

    // const myprompt = promptConstructor.constructInitialPrompt(userPrompt, roadmapTitle, roadmapDuration);
    // const geminiResponse = await gemini(myprompt);
    
    // const transformer = new DataTransformer(
    //     new JsonParser(),
    //     new RoadmapValidator(),
    //     new RoadmapEnricher()
    // );
    // const finalRoadmapStruct: Roadmap | null = transformer.transform(geminiResponse, {title: roadmapTitle, duration : roadmapDuration, owner: owner});
    
    
    // const descriptionMap : Map<string, string> = await fillDescriptions(finalRoadmapStruct);

    // finalRoadmapStruct?.tasks.map(task => {
    //     task.subtopics.map(sub => {
    //         const description = descriptionMap.get(sub.title);
    //         sub.description = description;
    //     })
    // });
    try {
        await connectDB();
        const saveRoadmap = await RoadmapModel.insertOne(myRoadmap);
        if(saveRoadmap){
            console.log("Roadmap saved");
        }
    } catch (error) {
        console.log("DB error occured", error);
        
    }



}

export const worker = new Worker(queueMaps.roadmapQueue!, jobHandler, { connection: RedisConnection });

