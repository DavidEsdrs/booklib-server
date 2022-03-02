import { Request, Response } from "express";
import { IDeleteBookDTO } from "./IDeleteBookDTO";

interface IDeleteBookService {
    execute(args: IDeleteBookDTO): Promise<{ response: string }>
}

export class DeleteBookController {
    constructor(private service: IDeleteBookService) {}

    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const result = await this.service.execute({ id });
        return res.json(result);
    }
}