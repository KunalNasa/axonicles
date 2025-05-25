import { Request } from "express";
import { getAuth } from "./auth";
import { fromNodeHeaders } from "better-auth/node";
import { User } from "better-auth";


export async function getUserFromSession (req:Request): Promise<User | null> {
    try {
        const auth = await getAuth();
        const session = await auth.api.getSession({
            headers: fromNodeHeaders(req.headers),
        });
    
        const user = session?.user;
        if (!user) {
            throw new Error("User not found in session");
        }
        return user;
    } catch (error: any) {
        return null;
    }
}