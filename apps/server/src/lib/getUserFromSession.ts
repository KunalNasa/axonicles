import { Request } from "express";
import { getAuth } from "./auth";
import { fromNodeHeaders } from "better-auth/node";


export async function functionGetUserFromSession (req:Request) {
    try {
        const auth = await getAuth();
        const session = await auth.api.getSession({
            headers: fromNodeHeaders(req.headers),
        });
    
        const user = session?.user;

        return user;
    } catch (error) {
        return error;
    }
}