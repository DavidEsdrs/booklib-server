import { Request, Response } from "express";
import { Book } from "../../../entities/Book";
import { ICreateBookDTO } from "./ICreateBookDTO";

interface ICreateBookService {
    execute(args: ICreateBookDTO): Promise<Book>;
}

export class CreateBookController {
    constructor(private service: ICreateBookService) {}

    async handle(req: Request, res: Response) {
        const content = {
            ...req.body,
            content: req.file
        };
        const book = await this.service.execute(content);
        return res.json(book);
    }
}