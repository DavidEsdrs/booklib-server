import { Response } from "express";
import { NextFunction } from "express";
import { Request } from "express";
import Joi from "joi"

const validateBook = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
        content: Joi.any().
            required(),

        title: Joi.string().
            required().
            min(1).
            max(50),

        author: Joi.alternatives([
            Joi.string().
                required().
                min(3).
                max(30),

            Joi.array().
                required().
                min(2).
                max(10).
                items(
                    Joi.string().
                    required().
                    min(3).
                    max(30)
                )
        ]),

        excerpt: Joi.string().
            required().
            min(10),

        published_at: Joi.date().
            required().
            default(new Date())
    });

    const { error } = schema.validate(req.body);

    if(error) {
        throw new Error("Invalid body!");
    }

    next();
}

export default validateBook;