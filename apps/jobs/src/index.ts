import { worker } from "./workers/roadmapWorker";

worker.on('completed', () => {
    console.log("Task completed");
})

worker.on('failed', (err) => {
    console.error("Task failed with error:", err);
})