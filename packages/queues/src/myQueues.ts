import { Queue } from "bullmq";
import {queueMaps, RedisConnection} from "@axonicles/lib/lib"

export const roadmapQueue = new Queue(queueMaps.roadmapQueue!, {
    connection: RedisConnection
});


