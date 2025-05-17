import { generatorLogger } from "./lib/generatorLogger";
import { worker } from "./workers/roadmapWorker";

worker.on('completed', () => {
    generatorLogger.info("Job Completed");
})

worker.on('failed', (err) => {
    generatorLogger.error("Job failed", err);
})