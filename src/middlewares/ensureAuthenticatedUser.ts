import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export const ensureAuthenticatedUser = (req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers.authorization;

    if(!auth) {
        return res.status(401).json({ error: "Invalid Request!" });
    }

    const [ , token ] = auth.split(" ");

    try {
        const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;
        req.user_id = sub;
        return next();
    }

    catch {
        return res.status(401).end();
    }
}