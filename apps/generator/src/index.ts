import { generatorLogger } from "./lib/generatorLogger";
import { worker } from "./workers/roadmapWorker";

console.log("server running");
worker.on("ready", () => {
    console.log("Worker is ready and connected to Redis");
  });
  
worker.on('completed', () => {
    generatorLogger.info("Job Completed");
})

worker.on('failed', (err) => {
    generatorLogger.error("Job failed", err);
})