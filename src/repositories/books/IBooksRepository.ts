import { Book } from "../../entities/Book";

export interface IBooksRepository {
    create(args: Partial<Book>): Book;
    save(book: Book): Promise<void>;
}