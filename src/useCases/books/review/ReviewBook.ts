import { IBooksRepository } from "../../../repositories/books/IBooksRepository";
import { IReviewBookDTO } from "./IReviewBookDTO";

export class ReviewBook {
    constructor(private booksRepo: IBooksRepository) {}

    async execute({ id, review }: IReviewBookDTO) {
        await this.booksRepo.review({ id, review });
        return { reviewed_book: id, review };
    }
}