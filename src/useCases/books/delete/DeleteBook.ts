import { IBooksRepository } from "../../../repositories/books/IBooksRepository";
import { IDeleteBookDTO } from "./IDeleteBookDTO";

export class DeleteBook {
    constructor(private booksRepo: IBooksRepository) {}

    async execute({ id }: IDeleteBookDTO) {
        await this.booksRepo.deleteBook(id);
        return {
            response: `Book ${id} deleted`
        };
    }
}