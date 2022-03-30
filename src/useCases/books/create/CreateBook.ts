import { instanceToPlain } from "class-transformer";
import { Book } from "../../../entities/Book";
import { IBooksRepository } from "../../../repositories/books/IBooksRepository";
import { IUsersRepository } from "../../../repositories/users/IUsersRepository";
import { ICreateBookDTO } from "./ICreateBookDTO";

export class CreateBook {
    constructor(private booksRepo: IBooksRepository, private usersRepo: IUsersRepository) {}

    async execute(createBookDTO: ICreateBookDTO) {
        const user = await this.usersRepo.findOne({ id: createBookDTO.published_by });
        const book = this.booksRepo.create({
            ...createBookDTO,
            published_by: user
        });
        await this.booksRepo.save(book);
        return instanceToPlain(book) as Book;
    }
}