import { IBooksRepository } from "../../../repositories/books/IBooksRepository";
import { ICreateBookDTO } from "./ICreateBookDTO";

export class CreateBook {
    constructor(private booksRepo: IBooksRepository) {}

    async execute(createBookDTO: ICreateBookDTO) {
        // Buffer.from(createBookDTO.content.buffer)
        const book = this.booksRepo.create({
            ...createBookDTO,
            content: createBookDTO.content
        });
        await this.booksRepo.save(book);
        return book;
    }
}