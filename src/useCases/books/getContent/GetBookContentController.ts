import { Response } from "express";
import { Request } from "express";
import { ReadStream } from "fs";

interface IGetBookContentService {
    execute(file: string): ReadStream;
}

export class GetBookContentController {
    constructor(private service: IGetBookContentService) {}

    async handle(req: Request, res: Response) {
        const { file } = req.params;
        const content = this.service.execute(file);
        content.pipe(res);
    }
}