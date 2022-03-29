import { IUsersRepository } from "../../../repositories/users/IUsersRepository";
import { ICreateUserDTO } from "./ICreateUserDTO";
import { hash } from "argon2";
import { UserAlreadyExistsError } from "../../../errors/ServerError";

export class CreateUser {
    constructor(private usersRepo: IUsersRepository) {}

    async execute({ email, password, username }: ICreateUserDTO) {
        const userAlreadyExists = await this.usersRepo.usersAlreadyExists(email);
        
        if(userAlreadyExists) {
            throw new UserAlreadyExistsError();
        }

        const passwordHash = await hash(password);
        const user = this.usersRepo.create({ email, username, password: passwordHash });
        await this.usersRepo.save(user);
        return user;
    }
}