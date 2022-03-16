import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../../../repositories/users/implementations/UsersRepository"
import { Login } from "./Login";
import { LoginController } from "./LoginController";

export const buildLogin = () => {
    const usersRepo = getCustomRepository(UsersRepository);
    const service = new Login(usersRepo);
    const controller = new LoginController(service);
    return controller;
}