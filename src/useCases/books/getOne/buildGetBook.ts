import { getCustomRepository } from "typeorm"
import { BooksRepository } from "../../../repositories/books/implementations/BooksRepository"
import { GetBook } from "./GetBook";
import { GetBookController } from "./GetBookController";

export const buildGetBook = () => {
    const booksRepo = getCustomRepository(BooksRepository);
    const service = new GetBook(booksRepo);
    const controller = new GetBookController(service);
    return controller;
}