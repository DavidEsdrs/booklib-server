import { Request, Response } from "express";
import { Book } from "../../../entities/Book";
import { Merge } from "../../../utils/types";
import { ICreateBookDTO } from "./ICreateBookDTO";

interface ICreateBookService {
    execute(args: ICreateBookDTO): Promise<Merge<Book, { content: string }>>;
}

export class CreateBookController {
    constructor(private service: ICreateBookService) {}

    async handle(req: Request, res: Response) {
        const content = {
            ...req.body,
            content: String(new Date().getTime()) + "-" + req.body.title.replaceAll(" ", "-") + "." + req.file_type
        };
        const book = await this.service.execute(content);
        return res.json(book);
    }
}

