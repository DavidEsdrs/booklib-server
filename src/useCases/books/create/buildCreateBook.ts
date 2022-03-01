import { getCustomRepository } from "typeorm";
import { BooksRepository } from "../../../repositories/books/implementations/BooksRepository";
import { CreateBook } from "./CreateBook";
import { CreateBookController } from "./CreateBookController";

const buildCreateBook = () => {
    const booksRepo = getCustomRepository(BooksRepository);
    const service = new CreateBook(booksRepo);
    const controller = new CreateBookController(service);
    return controller;
}

export default buildCreateBook;