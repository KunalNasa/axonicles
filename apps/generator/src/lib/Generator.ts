import { gemini } from "@axonicles/lib/geminiConnection";
import { PromptConstruct } from "./promptConstructor";
import { JsonParser } from "./DataTransformer/JsonParser";
import { DataTransformer } from "./DataTransformer/DataTransformer";
import { RoadmapValidator } from "./DataTransformer/RoadmapValidator";
import { RoadmapEnricher } from "./DataTransformer/RoadmapEnricher";
import { Roadmap } from "@axonicles/types/index";
import { subtopicDescriptionSchema } from "@axonicles/zod-schemas/index";
import { generatorLogger as logger } from "./generatorLogger";

export class Generator {
    public async generateRoadmapStructure(description: string, roadmapTitle: string, roadmapDuration: number, owner: string): Promise<Roadmap | null> {
        const promptConstructor = new PromptConstruct;

        const MAX_RETRIES = 2;
        let finalRoadmapStruct: Roadmap | null = null;

        for(let i = 0; i < MAX_RETRIES; i++){

            const myprompt = promptConstructor.constructInitialPrompt(description, roadmapTitle, roadmapDuration);
            const geminiResponse = await gemini(myprompt);
            try {
                const transformer = new DataTransformer(
                    new JsonParser(),
                    new RoadmapValidator(),
                    new RoadmapEnricher()
                );
                finalRoadmapStruct = transformer.transform(geminiResponse, { title: roadmapTitle, duration: roadmapDuration, owner: owner, description: description });
                logger.info("Initial Roadmap structure constructed");
                break;
            } catch (error) {
                logger.warn("Error occured while generating initial roadmap structure", error);
            }
        }
        return finalRoadmapStruct;
    }

    public async generateDescriptions(roadmap: Roadmap) {
        const totalTasks = roadmap.tasks.length;
        const iterationSize = Math.floor(totalTasks / 4);
        let pendingTasks = Math.floor(totalTasks % 4);
        let finalDescriptionMap: Map<string, string> = new Map();
    
        let currentReq = 0;
    
        while (currentReq < totalTasks) {
            const tasks: any[] = [];
            let loopSize = pendingTasks > 0 ? iterationSize + 1 : iterationSize;
            if (pendingTasks > 0) pendingTasks--;
    
            const start = currentReq;
            const end = currentReq + loopSize;
            currentReq += loopSize;
    
            for (let i = start; i < end; i++) {
                tasks.push(roadmap.tasks[i]);
            }
    
            const constructMyPrompt = new PromptConstruct();
            const myPrompt = constructMyPrompt.constructSubtopicDescriptionPrompt(tasks);
    
            // retry mechanism
            let parsedResponse: any = null;
            const MAX_RETRIES = 2;
            for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
                try {
                    const geminiResponse = await gemini(myPrompt);
                    const parser = new JsonParser();
                    parsedResponse = parser.parse(geminiResponse);
                    const validateResponse = subtopicDescriptionSchema.safeParse(parsedResponse);
                    if (validateResponse.success) {
                        break; // success, exit retry loop
                    }
                    logger.warn(`Validation failed on attempt ${attempt + 1}`);
                } catch (err) {
                    logger.error(`Error in Gemini or parsing on attempt ${attempt + 1}`, err);
                }
            }
    
            if (!parsedResponse) {
                logger.warn(`Skipping tasks batch starting from index ${start} due to repeated failure.`);
                continue;
            }
    
            for (const [key, value] of Object.entries(parsedResponse)) {
                finalDescriptionMap.set(key, value as string);
            }
        }
    
        return finalDescriptionMap;
    }

}
