// import { AppError } from "@axonicles/lib/ErrorResponse";
import { NextFunction, Request, Response } from "express";
import {roadmapQueue} from "@axonicles/lib/index"



export async function fetchAllRoadmaps(req: Request, res: Response, next: NextFunction) : Promise<any> {
    try {
        return res.status(200).json({
            roadmaps: "All roadmaps"
        })
    } catch (error) {
        
    }
}

export async function generateRoadmap(req: Request, res: Response, next: NextFunction) : Promise<any> {
    try {
      const data = {
      userPrompt: "Roadmap for a cracked Devops Engineer",
      roadmapTitle: "Devops Engineer",
      roadmapDuration: 100,
      owner: "Kunal"
    }
    await roadmapQueue.add('roadmapBuilder', data);

    return res.status(200).json({
        roadmaps: "All roadmaps"
    })
    } catch (error) {
        
    }
}