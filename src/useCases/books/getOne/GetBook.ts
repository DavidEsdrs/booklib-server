import { IBooksRepository } from "../../../repositories/books/IBooksRepository";
import { IGetBookDTO } from "./IGetBookDTO";

export class GetBook {
    constructor(private booksRepo: IBooksRepository) {}

    async execute(args: IGetBookDTO) {
        const book = await this.booksRepo.getBook(args);
        return book;
    }
}