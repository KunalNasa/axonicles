import express, { ErrorRequestHandler, NextFunction, Request, RequestHandler, Response } from "express";
import dotenv from "dotenv";
import {connectDB} from "@axonicles/db/connection/db";
import { toNodeHandler } from "better-auth/node";
import { getAuth } from "./lib/auth";
import cors from "cors";
import { errorHandler } from "./middlewares/ErrorHandler";
import roadmapRoutes from './routes/roadmap.routes'
import userRoutes from './routes/user.routes'


dotenv.config();

const app = express();
const PORT = process.env.PORT;

const startServer = async () => {
    await connectDB();
    const auth = await getAuth();
    app.use(
    cors({
        origin: "http://localhost:3000", // Replace with your frontend's origin
        methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
        credentials: true, // Allow credentials (cookies, authorization headers, etc.)
        })
    );
    app.all("/api/auth/*splat", toNodeHandler(auth));
    app.use('/api/roadmap', roadmapRoutes);
    app.use('/api/user', userRoutes);
    app.use(errorHandler as any);    
    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}`);
    });
};

startServer().catch((err) => {
    console.error("Failed to start the server:", err);
});
