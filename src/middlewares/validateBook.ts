import { Response } from "express";
import { NextFunction } from "express";
import { Request } from "express";
import Joi from "joi"
import { InvalidBodyError } from "../errors/ServerError";

const validateBook = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
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
        throw new InvalidBodyError({ message: error.message, args: error.details });
    }

    return next();
}

export default validateBook;