import { Response } from "express";
import { Request } from "express";
import { Review } from "../../../entities/Review";
import { ICreateReviewDTO } from "./ICreateReviewDTO";

interface ICreateReviewService {
    execute(args: ICreateReviewDTO): Promise<Review>;
}

export class CreateReviewController {
    constructor(private service: ICreateReviewService) {}

    async handle(req: Request, res: Response) {
        const { user_id: user } = req;
        const { book } = req.params;
        const review = await this.service.execute({ user, book });
        return res.json(review);
    }
}