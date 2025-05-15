import { worker } from "./workers/roadmapWorker";

worker.on('completed', () => {
    console.log("Task completed");
})

worker.on('failed', () => {
    console.log("Task failed");
})