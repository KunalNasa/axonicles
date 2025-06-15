import { RoadmapModel } from "@axonicles/db/index";
import { NextFunction, Request, Response } from "express";
import { getUserFromSession } from "../lib/getUserFromSession";
import { Roadmap } from "@axonicles/types/index";
import { ApiResponse } from "@axonicles/lib/ApiResponse";
import { AppError, InternalServerError } from "@axonicles/lib/ErrorResponse";

export async function userDetails(req: Request, res: Response, next: NextFunction) : Promise<any> {
    try {
        const user = await getUserFromSession(req, next);
        const response: ApiResponse<typeof user> = {
            message: "user data fetched successfully",
            data : user
        }
        return res.status(200).json(response);
    } catch (error: any) {
        return next(new InternalServerError());
    }

}

export async function fetchAllRoadmapsOfUser(req: Request, res: Response, next: NextFunction) : Promise<any> {
    try {
        const user = await getUserFromSession(req, next);
        // const userId = user?.id;
        const userId = '6835d5a2312a7c3068ff73ee';

        const roadmaps = await RoadmapModel.find({
            owner: userId
        });
        const response: ApiResponse<Roadmap[]> = {
            message: "Roadmaps fetched successfully",
            data: roadmaps
        }
        return res.status(200).json(response);
    } catch (error : any) {
        console.error("Error reported in fetchAllRoadmap route: ", error.message);
        return next(new InternalServerError());
    }
}


export async function getRequestedRoadmap(req: Request, res: Response, next: NextFunction) : Promise<any> {
    try {
        const { id } = req.params;
        const roadmap = await RoadmapModel.findById(id);
        if(!roadmap){
            return next(new AppError("Roadmap not found", 404));
        }
        //TODO: vaildate whether roadmap belongs to user or not
        const response: ApiResponse<Roadmap> = {
            message: "Roadmap data fetched successfully",
            data: roadmap
        } 
        return res.status(200).json(response);
    } catch (error : any) {
        console.error("Internal server error in user roadmap fetching", error.message);
        return next(new InternalServerError());
    }

}