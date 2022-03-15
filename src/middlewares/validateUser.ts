import { Response } from "express";
import { NextFunction } from "express";
import { Request } from "express";
import Joi from "joi"

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
        username: Joi.string().
            required().
            min(3).
            max(15).
            alphanum(),

        email: Joi.string().
            email().
            required(),
        
        password: Joi.string().
            required().
            min(8).
            max(50)
    });

    const { error } = schema.validate(req.body);

    if(error) {
        throw new Error(error.message);
    }

    next();
}