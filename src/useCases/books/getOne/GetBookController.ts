import { Request, Response } from "express";
import { Book } from "../../../entities/Book";
import { IGetBooksDTO } from "../getMany/IGetBooksDTO";
import { IGetBookDTO } from "./IGetBookDTO";

type GetBookQuery = IGetBooksDTO;

interface IGetBookService {
    execute(args: IGetBookDTO): Promise<Book>;
}

export class GetBookController {
    constructor(private service: IGetBookService) {}

    async handle(req: Request<undefined, undefined, GetBookQuery>, res: Response) {
        const query = req.query;
        const book = await this.service.execute(query);
        return book;
    }
}