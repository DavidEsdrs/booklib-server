import { User } from "../../../entities/User";
import { EntityRepository, Repository } from "typeorm";
import { IUsersRepository } from "../IUsersRepository";

@EntityRepository(User)
export class UsersRepository extends Repository<User> implements IUsersRepository {
    async usersAlreadyExists(email: string): Promise<boolean> {
        const exists = !!await this.findOne({ where: { email } });
        return exists;
    }
}