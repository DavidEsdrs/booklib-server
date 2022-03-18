import { Book } from "../../entities/Book";
import { Review } from "../../entities/Review";
import { User } from "../../entities/User";

export interface IReviewsRepository {
    create(args: { user: User, book: Book }): Review;
    save(args: Review): Promise<Review>;
}