import { Response } from "express";
import { Request } from "express";
import { ILoginDTO } from "./ILoginDTO";

interface ILoginService {
    execute(args: ILoginDTO): Promise<string>;
}

export class LoginController {
    constructor(private service: ILoginService) {}

    async handle(req: Request, res: Response) {
        const { email, username, password } = req.body;
        const token = await this.service.execute({ email, username, password });
        return res.json({ token });
    }
}