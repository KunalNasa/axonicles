import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "@axonicles/db/dbClient";
import { toNodeHandler } from "better-auth/node";
import { getAuth } from "./lib/auth";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const startServer = async () => {
    await connectDB();
    const auth = await getAuth();

    app.all("/api/auth/*splat", toNodeHandler(auth));


    app.get("/", (req: Request, res: Response): any => {
        return res.json({
            message: "hello",
        });
    });

    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}`);
    });
};

startServer().catch((err) => {
    console.error("Failed to start the server:", err);
});
