import { Response } from "express";
import { Request } from "express";
import { User } from "../../../entities/User";
import { ICreateUserDTO } from "./ICreateUserDTO";

interface ICreateUserService {
    execute(args: ICreateUserDTO): Promise<User>;
}

export class CreateUserController {
    constructor(private service: ICreateUserService) {}

    async handle(req: Request, res: Response) {
        const body = req.body;
        const user = await this.service.execute(body);
        return res.json(user);
    }
}