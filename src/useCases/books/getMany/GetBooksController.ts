import { Request, Response } from "express";
import { Book } from "../../../entities/Book";
import { IGetBooksDTO } from "./IGetBooksDTO";

interface IGetBooksService {
    execute(args?: IGetBooksDTO): Promise<Book[]>;
}

export class GetBooksController {
    constructor(private service: IGetBooksService) {}

    async handle(req: Request, res: Response) {
        const take = Number(req.query.take);
        const relations = req.query.relations as string[];
        const books = await this.service.execute({ take, relations });
        return res.json(books);
    }
}