import { fromNodeHeaders } from "better-auth/node";
import { NextFunction, Request, Response } from "express";
import { getAuth } from "../lib/auth";

export async function verifyUser (req: Request, res: Response, next: NextFunction) {
    const auth = await getAuth();
    const session = await auth.api.getSession({
        headers: fromNodeHeaders(req.headers),
    });

    if(!session){
        console.log("Unauthorised");
        return res.status(401).json({
            message : "Unauthorized request"
        })
    }

    next();

}