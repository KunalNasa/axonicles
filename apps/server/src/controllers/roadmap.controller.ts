// import { AppError } from "@axonicles/lib/ErrorResponse";
import { NextFunction, Request, Response } from "express";
import {ApiResponse} from "@axonicles/lib/ApiResponse"
import { AppError, BadRequestError } from "@axonicles/lib/ErrorResponse";
import { roadmapQueue } from "@axonicles/lib/myQueues";
import {generateRoadmapSchema} from "@axonicles/zod-schemas/index"
import { getUserFromSession } from "../lib/getUserFromSession";
import { RoadmapModel } from "@axonicles/db/index";
import { InternalServerError } from "@axonicles/lib/ErrorResponse";



export async function generateRoadmap(req: Request, res: Response, next: NextFunction) : Promise<any> {
    try {
        // zod validation here
        const {prompt, title, duration} = req.body;
        const user = await getUserFromSession(req, next);
        const userId = user?.id;

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
        // const formattedData = {
        //     description: "Make a full-stack web development roadmap.",
        //     title: "Web Developer",
        //     duration: 100,
        //     userId
        // }
        await roadmapQueue.add('roadmapBuilder', formattedData);
        const response:ApiResponse<null> = {
            message: "Roadmap added to queue.",
            data: null
        }

        return res.status(200).json(response);
    } catch (error : any) {
        console.error("Internal server error in queuing roadmap: ", error.message);
        return next(new InternalServerError());
    }
}

export async function updateTaskCompletion(req: Request, res: Response, next: NextFunction) : Promise<any> {
    try {
        const {title} = req.body;
        const user = await getUserFromSession(req, next);
        const userId = user?.id;
        const roadmap = await RoadmapModel.findOne({
            owner: userId
        });
        
        if(!roadmap){
            return next(new AppError("Roadmap doesn't exist.", 404));
        }
        let isTitleCorrect = false;
        roadmap.tasks.forEach((task) => {
            if (task.title === title) {
              isTitleCorrect = true;
              task.is_completed = true;
              if(!task.startDate){
                task.startDate = new Date(Date.now());
              }
            }
        });
        if(!isTitleCorrect){
            return next(new BadRequestError());
        }
        await roadmap.save();
        const response: ApiResponse<null>= {
            message: "Task updated successfully",
            data: null
        }
        return res.status(201).json(response);
    } catch (error:any) {
        console.error("Internal server error in update task", error.message);
        return next(new InternalServerError());
    }
}

export async function startTask(req: Request, res: Response, next: NextFunction) : Promise<any> {
    try {
        const {title} = req.body;
        const user = await getUserFromSession(req, next);
        const userId = user?.id;
        const roadmap = await RoadmapModel.findOne({
            owner: userId
        });
        
        if(!roadmap){
            return next(new AppError("Roadmap doesn't exist.", 404));
        }
        roadmap.tasks.forEach((task) => {
            if (task.title === title) {
              if(!task.startDate){
                task.startDate = new Date(Date.now());
              }
            }
        });
        await roadmap.save();
        const response: ApiResponse<null>= {
            message: "Task updated Successfully",
            data: null
        }
        return res.status(201).json(response);
    } catch (error:any) {
        console.error("Internal server error in update task", error.message);
        return next(new InternalServerError());
    }
}

export async function addSubtopicResources(req: Request, res: Response, next: NextFunction) : Promise<any> {
    try {
        // zod type here
        const {resource, roadmapId, title: subtopicTitle} = req.body();
        const user = await getUserFromSession(req, next);
        const userId = user?.id;

        const roadmap = await RoadmapModel.findOne({
            _id: roadmapId,
            owner: userId
        });
        if(!roadmap){
            return next(new AppError("No roadmap found.", 404));
        }
        let isTitleCorrect = false;
        roadmap.tasks.forEach((task) => {
            task.subtopics.forEach((sub) => {
                if(sub.title === subtopicTitle) {
                    isTitleCorrect = true;
                    if(sub.resources !== undefined){
                        // TODO: Fix this as never type
                        sub.resources?.push(resource as never);
                    }
                }
            })
        })
        if(!isTitleCorrect){
            return next(new BadRequestError());
        }
        await roadmap.save();
        const response: ApiResponse<typeof roadmap> = {
            message: "Resource added successfully",
            data : roadmap
        };
        return res.status(201).json(response);

    } catch (error:any) {
        console.error("Internal server error in addSubtopic Route", error.message);
        return next(new InternalServerError("Internal server Error"));
    }
}


export async function updateSubtopicDescription(req: Request, res: Response, next: NextFunction) : Promise<any> {
    try {
        const {description, roadmapId, title: subtopicTitle} = req.body;
        const user = await getUserFromSession(req, next);
        const userId = user?.id;

        const roadmap = await RoadmapModel.findOne({
            _id: roadmapId,
            owner: userId
        });
        if(!roadmap){
            return next(new AppError("No roadmap found.", 404));
        }
        let isTitleCorrect = false;
        roadmap.tasks.forEach((task) => {
            task.subtopics.forEach((sub) => {
                if(sub.title === subtopicTitle) {
                    isTitleCorrect = true;
                    sub.description = description;
                }
            })
        })
        if(!isTitleCorrect){
            return next(new BadRequestError());
        }
        await roadmap.save();
        const response: ApiResponse<typeof roadmap> = {
            message: "Description updated successfully",
            data : roadmap
        };
        return res.status(201).json(response);
    } catch (error: any) {
        console.error("Internal server error while updating resources", error.message);
        return next(new InternalServerError());
    }
}


export async function updateSubtopicStatus(req: Request, res: Response, next: NextFunction) : Promise<any> {
    try {
        // require zod validation here
        const {status: newStatus, roadmapId, title: subtopicTitle} = req.body;
        const user = await getUserFromSession(req, next);
        const userId = user?.id;
        const roadmap = await RoadmapModel.findOne({
            _id: roadmapId,
            owner: userId
        });
        if(!roadmap){
            return next(new AppError("No roadmap found.", 404));
        }
        let isTitleCorrect = false;
        roadmap.tasks.forEach((task) => {
            task.subtopics.forEach((sub) => {
                if(sub.title === subtopicTitle) {
                    isTitleCorrect = true;
                    sub.status = newStatus;
                }
            })
        })
        if(!isTitleCorrect){
            return next(new BadRequestError());
        }
        await roadmap.save();
        const response: ApiResponse<typeof roadmap> = {
            message: "Status updated successfully",
            data : roadmap
        };
        return res.status(201).json(response);
    } catch (error: any) {
        console.error("Internal server error while updating resources", error.message);
        return next(new InternalServerError());
    }
}


export async function searchUserRoadmaps(req: Request, res: Response, next: NextFunction) : Promise<any> {
    try {
        // ideally it should be in query and not in body
        const {searchString} = req.body;
        const user = await getUserFromSession(req, next);
        const userId = user?.id;
        const roadmaps = await RoadmapModel.find({
            owner: userId,
            $or: [
              { title: { $regex: searchString, $options: "i" } },
              { "tasks.title": { $regex: searchString, $options: "i" } },
              { "tasks.subtopics.title": { $regex: searchString, $options: "i" } },
            // no need to search in description now   { "tasks.subtopics.description": { $regex: searchString, $options: "i" } },
            ]
        });
        return res.status(200).json({roadmaps});

    } catch (error: any) {
        console.error("Internal server error in user roadmap search", error.message);
        return next(new InternalServerError());
    }
}

export async function searchGlobalRoadmaps(req: Request, res: Response, next: NextFunction) : Promise<any> {
    try {
        const {searchString} = req.body;
        const roadmaps = await RoadmapModel.find({
            $or: [
              { title: { $regex: searchString, $options: "i" } },
              { "tasks.title": { $regex: searchString, $options: "i" } },
              { "tasks.subtopics.title": { $regex: searchString, $options: "i" } },
            // no need to search in description now   { "tasks.subtopics.description": { $regex: searchString, $options: "i" } },
            ]
        });
        return res.status(200).json({roadmaps});

    } catch (error: any) {
        console.error("Internal server error in user roadmap search", error.message);
        return next(new InternalServerError());
    }
}

