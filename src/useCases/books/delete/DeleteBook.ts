import { instanceToPlain } from "class-transformer";
import { UnauthorizedRequestError } from "../../../errors/ServerError";
import { IBooksRepository } from "../../../repositories/books/IBooksRepository";
import { IDeleteBookDTO } from "./IDeleteBookDTO";

export class DeleteBook {
    constructor(private booksRepo: IBooksRepository) {}

    async execute({ id, user }: IDeleteBookDTO) {
        const book = await this.booksRepo.getBook({ id, relations: ["published_by"] });
        if(book.published_by.id !== user) {
            throw new UnauthorizedRequestError();
        }
        const file = book.content;
        await this.booksRepo.deleteBook({ id, file });
        return {
            response: `Book ${id} deleted`,
            book: instanceToPlain(book)
        };
    }
}