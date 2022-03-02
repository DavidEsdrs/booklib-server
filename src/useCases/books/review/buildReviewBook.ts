import { getCustomRepository } from "typeorm"
import { BooksRepository } from "../../../repositories/books/implementations/BooksRepository"
import { ReviewBook } from "./ReviewBook";
import { ReviewBookController } from "./ReviewBookController";

export const buildReviewBook = () => {
    const booksRepo = getCustomRepository(BooksRepository);
    const service = new ReviewBook(booksRepo);
    const controller = new ReviewBookController(service);
    return controller;
}