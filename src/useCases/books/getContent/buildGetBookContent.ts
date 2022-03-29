import { getCustomRepository } from "typeorm"
import { BooksRepository } from "../../../repositories/books/implementations/BooksRepository"
import { GetBookContent } from "./GetBookContent";
import { GetBookContentController } from "./GetBookContentController";

export const buildGetBookContent = () => {
    const booksRepo = getCustomRepository(BooksRepository);
    const service = new GetBookContent(booksRepo);
    const controller = new GetBookContentController(service);
    return controller;
}