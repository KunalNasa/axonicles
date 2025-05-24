import { Queue } from "bullmq";
import { queueMaps } from "./queueMaps";
import { RedisConnection } from "./redisConnection";


export const roadmapQueue = new Queue(queueMaps.roadmapQueue!, {
    connection: RedisConnection
});


