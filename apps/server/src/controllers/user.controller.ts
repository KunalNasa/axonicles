import { RoadmapModel } from "@axonicles/db/index";
import { NextFunction, Request, Response } from "express";
import { getUserFromSession } from "../lib/getUserFromSession";
import { Roadmap } from "@axonicles/types/index";
import { ApiResponse } from "@axonicles/lib/ApiResponse";
import { InternalServerError } from "@axonicles/lib/ErrorResponse";

export async function userDetails(req: Request, res: Response, next: NextFunction) : Promise<any> {

}

export async function fetchAllRoadmapsOfUser(req: Request, res: Response, next: NextFunction) : Promise<any> {
    try {
        const user = await getUserFromSession(req, next);
        const userId = user?.id;

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