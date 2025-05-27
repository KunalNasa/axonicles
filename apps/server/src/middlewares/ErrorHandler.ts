// middleware/errorHandler.ts
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import {AppError} from "@axonicles/lib/ErrorResponse"


export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
        success: false,
        message: err.message,
        });
    }

    console.error("Unexpected Error: ", err);

    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
}
