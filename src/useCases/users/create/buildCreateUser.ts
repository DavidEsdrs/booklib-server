import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../../../repositories/users/implementations/UsersRepository"
import { CreateUser } from "./CreateUser";
import { CreateUserController } from "./CreateUserController";

export const buildCreateUser = () => {
    const usersRepo = getCustomRepository(UsersRepository);
    const service = new CreateUser(usersRepo);
    const controller = new CreateUserController(service);
    return controller;
}