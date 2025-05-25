// import { AppError } from "@axonicles/lib/ErrorResponse";
import { NextFunction, Request, Response } from "express";
import {ApiResponse, AppError, BadRequestError, roadmapQueue, UnauthorizedError} from "@axonicles/lib/index"
import {generateRoadmapSchema} from "@axonicles/zod-schemas/index"
import { getUserFromSession } from "../lib/getUserFromSession";

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
        const {prompt, title, duration} = req.body;
        const user = await getUserFromSession(req);
        if(!user){
            return next(new UnauthorizedError());
        }
        const userId = user.id;
        const formattedData = {
            prompt,
            title,
            duration,
            userId
        }
        const parseData = generateRoadmapSchema.safeParse(formattedData);

        if(!parseData.success){
            return next(new BadRequestError());
        }

        await roadmapQueue.add('roadmapBuilder', formattedData);
        const response:ApiResponse<null> = {
            success: true,
            message: "Roadmap added to queue.",
            data: null
        }

        return res.status(200).json(response);
    } catch (error : any) {
        return next(new AppError(error.message));
    }
}

export async function updateTaskCompletion(req: Request, res: Response, next: NextFunction) : Promise<any> {

}

export async function startTask(req: Request, res: Response, next: NextFunction) : Promise<any> {

}

export async function updateSubtopicCompletion(req: Request, res: Response, next: NextFunction) : Promise<any> {

}


export async function updateSubtopicResources(req: Request, res: Response, next: NextFunction) : Promise<any> {

}
export async function updateSubtopicDescription(req: Request, res: Response, next: NextFunction) : Promise<any> {

}


export async function updateSubtopicStatus(req: Request, res: Response, next: NextFunction) : Promise<any> {

}

