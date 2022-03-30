import { getCustomRepository } from "typeorm";
import { BooksRepository } from "../../../repositories/books/implementations/BooksRepository";
import { UsersRepository } from "../../../repositories/users/implementations/UsersRepository";
import { CreateBook } from "./CreateBook";
import { CreateBookController } from "./CreateBookController";

const buildCreateBook = () => {
    const booksRepo = getCustomRepository(BooksRepository);
    const usersRepo = getCustomRepository(UsersRepository);
    const service = new CreateBook(booksRepo, usersRepo);
    const controller = new CreateBookController(service);
    return controller;
}

export default buildCreateBook;