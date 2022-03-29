import { NextFunction } from "express";
import { Response } from "express";
import { Request } from "express";
import { ServerError } from "../errors/ServerError";

export const errorHandler = (err: ServerError, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof ServerError) {
        return res.status(err.status).json({ error: err.name, message: err.message });
    } else {
        return res.status(500).json({ error: "Internal server error", status: 500 })
    }
}