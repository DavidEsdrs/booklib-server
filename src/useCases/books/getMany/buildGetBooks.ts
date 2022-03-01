import { getCustomRepository } from "typeorm"
import { BooksRepository } from "../../../repositories/books/implementations/BooksRepository"
import { GetBooks } from "./GetBooks";
import { GetBooksController } from "./GetBooksController";

export const buildGetBooks = () => {
    const booksRepo = getCustomRepository(BooksRepository);
    const service = new GetBooks(booksRepo);
    const controller = new GetBooksController(service);
    return controller;
}