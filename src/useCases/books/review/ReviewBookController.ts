import { Request, Response } from "express";
import { IReviewBookDTO } from "./IReviewBookDTO";

interface IReviewBookService {
    execute(args: IReviewBookDTO): Promise<{ reviewed_book: string, review: string }>;
}

export class ReviewBookController {
    constructor(private service: IReviewBookService) {}

    async handle(req: Request, res: Response) {
        const { id, review } = req.body;
        const result = await this.service.execute({ id, review });
        return res.json(result);
    }
}