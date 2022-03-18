import { Review } from "../../../entities/Review";
import { IBooksRepository } from "../../../repositories/books/IBooksRepository";
import { IReviewsRepository } from "../../../repositories/reviews/IReviewsRepository";
import { IUsersRepository } from "../../../repositories/users/IUsersRepository";
import { ICreateReviewDTO } from "./ICreateReviewDTO";
import { instanceToPlain } from "class-transformer";

export class CreateReview {
    constructor(private reviewsRepo: IReviewsRepository, private usersRepo: IUsersRepository, private booksRepo: IBooksRepository) {}

    async execute({ book, user }: ICreateReviewDTO) {
        const userEntity = await this.usersRepo.findOne({ id: user });
        const bookEntity = await this.booksRepo.findOne({ id: book });
        const review = this.reviewsRepo.create({
            book: bookEntity,
            user: userEntity
        });
        await this.reviewsRepo.save(review);
        return instanceToPlain(review) as Review;
    }
}