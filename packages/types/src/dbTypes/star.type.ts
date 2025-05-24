import mongoose from "mongoose";

// Stars interface
export interface Star {
    _id: string | mongoose.Schema.Types.ObjectId
    userId: string | mongoose.Schema.Types.ObjectId
    roadmapId: string | mongoose.Schema.Types.ObjectId
}