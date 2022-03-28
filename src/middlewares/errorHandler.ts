import { NextFunction } from "express";
import { Response } from "express";
import { Request } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err) {
        return res.json({ error: err.name, message: err.message, status: 500 });
    }
}