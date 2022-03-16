import { User } from "../../entities/User";

export interface IUsersRepository {
    usersAlreadyExists(email: string): Promise<boolean>;
    create(args: Partial<User>): User;
    save(args: User): Promise<void>;
    findOne(args: Partial<User>): Promise<User>;
}