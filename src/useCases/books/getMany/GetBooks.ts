import { IBooksRepository } from "../../../repositories/books/IBooksRepository";
import { IGetBooksDTO } from "./IGetBooksDTO";

export class GetBooks {
    constructor(private booksRepo: IBooksRepository) {}

    async execute(args: IGetBooksDTO) {
        const books = await this.booksRepo.getBooks(args);
        return books;
    }
}