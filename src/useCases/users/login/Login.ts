import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/users/IUsersRepository";
import { ILoginDTO } from "./ILoginDTO";
import { verify } from "argon2";
import { sign } from "jsonwebtoken";

export class Login {
    constructor(private usersRepo: IUsersRepository) {}

    async execute({ email, username, password }: ILoginDTO) {
        let user: User;

        if(email) {
            user = await this.usersRepo.findOne({ email });
        }
        
        else if(username) {
            user = await this.usersRepo.findOne({ username });
        }

        const isCorrectPassword = await verify(user.password, password);

        if(!isCorrectPassword) {
            throw new Error("Credentials failed!");
        }

        const token = sign({ email }, process.env.JWT_SECRET, { subject: user.id, expiresIn: "1d" });

        return token;
    }
}
