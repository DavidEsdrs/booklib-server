import { getCustomRepository } from "typeorm"
import { BooksRepository } from "../../../repositories/books/implementations/BooksRepository";
import { ReviewsRepository } from "../../../repositories/reviews/implementations/TypeORMReviewsRepository"
import { UsersRepository } from "../../../repositories/users/implementations/UsersRepository";
import { CreateReview } from "./CreateReview";
import { CreateReviewController } from "./CreateReviewController";

export const buildCreateReview = () => {
    const reviewsRepo = getCustomRepository(ReviewsRepository);
    const usersRepo = getCustomRepository(UsersRepository);
    const booksRepo = getCustomRepository(BooksRepository);
    const service = new CreateReview(reviewsRepo, usersRepo, booksRepo);
    const controller = new CreateReviewController(service);
    return controller;
}