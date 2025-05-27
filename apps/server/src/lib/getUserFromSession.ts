import { NextFunction, Request } from "express";
import { getAuth } from "./auth";
import { fromNodeHeaders } from "better-auth/node";
import { UnauthorizedError } from "@axonicles/lib/ErrorResponse";


export async function getUserFromSession (req:Request, next: NextFunction, flag=true) {
    try {
        const auth = await getAuth();
        const session = await auth.api.getSession({
            headers: fromNodeHeaders(req.headers),
        });
    
        const user = session?.user;
        if (!user && flag) {
            return next(new UnauthorizedError());
        }else if(!user && !flag){
            throw new Error("User not found in session");
        }
        return user;
    } catch (error: any) {
        return null;
    }
}