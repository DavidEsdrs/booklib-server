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
        const { user_id } = req;
        const content = {
            ...req.body,
            content: req.file_props.file_name,
            published_by: user_id
        };
        const book = await this.service.execute(content);
        return res.json(book);
    }
}

