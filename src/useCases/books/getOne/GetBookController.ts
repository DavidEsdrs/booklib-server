import { Request, Response } from "express";
import { Book } from "../../../entities/Book";
import { getUrl } from "../../../utils/getUrl";
import { IGetBooksDTO } from "../getMany/IGetBooksDTO";
import { IGetBookDTO } from "./IGetBookDTO";

export type GetBookQuery = IGetBooksDTO;

interface IGetBookService {
    execute(args: IGetBookDTO): Promise<Book>;
}

export class GetBookController {
    constructor(private service: IGetBookService) {}

    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const book = await this.service.execute({ id });
        return res.json({
            ...book,
            content_url: getUrl(req) + "/download"
        });
    }   
}