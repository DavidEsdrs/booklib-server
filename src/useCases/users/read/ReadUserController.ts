import { Response } from "express";
import { Request } from "express";
import { User } from "../../../entities/User";

interface IReadUserService {
    execute(id: string): Promise<User>;
}

export class ReadUserController {
    constructor(private service: IReadUserService) {}

    async handle(req: Request, res: Response) {
        const { user_id: id } = req;
        const user = await this.service.execute(id);
        return res.json(user);
    }
}