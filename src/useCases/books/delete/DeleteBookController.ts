import { Request, Response } from "express";
import { IDeleteBookDTO } from "./IDeleteBookDTO";

interface IDeleteBookService {
    execute(args: IDeleteBookDTO): Promise<{ response: string }>
}

export class DeleteBookController {
    constructor(private service: IDeleteBookService) {}

    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { user_id: user } = req;
        const result = await this.service.execute({ id, user });
        return res.json(result);
    }
}