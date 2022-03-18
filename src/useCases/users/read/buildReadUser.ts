import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../../../repositories/users/implementations/UsersRepository"
import { ReadUser } from "./ReadUser";
import { ReadUserController } from "./ReadUserController";

export const buildReadUser = () => {
    const usersRepo = getCustomRepository(UsersRepository);
    const service = new ReadUser(usersRepo);
    const controller = new ReadUserController(service);
    return controller;
}