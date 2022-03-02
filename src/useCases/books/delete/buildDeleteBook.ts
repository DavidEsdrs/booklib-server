import { getCustomRepository } from "typeorm"
import { BooksRepository } from "../../../repositories/books/implementations/BooksRepository"
import { DeleteBook } from "./DeleteBook";
import { DeleteBookController } from "./DeleteBookController";

export const buildDeleteBook = () => {
    const booksRepo = getCustomRepository(BooksRepository);
    const service = new DeleteBook(booksRepo);
    const controller = new DeleteBookController(service);
    return controller;
}