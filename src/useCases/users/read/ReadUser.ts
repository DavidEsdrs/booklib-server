import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/users/IUsersRepository";
import { instanceToPlain } from "class-transformer";

export class ReadUser {
    constructor(private usersRepo: IUsersRepository) {}

    async execute(id: string) {
        const user = await this.usersRepo.findOne({ id });
        return instanceToPlain(user) as User;
    }
}