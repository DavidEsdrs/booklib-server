import { Book } from "../../entities/Book";

interface IGetBooksOptions {
    take?: number;
    relations?: string[];
}

export interface IBooksRepository {
    create(args: Partial<Book>): Book;
    save(book: Book): Promise<void>;
    getBooks(options?: IGetBooksOptions): Promise<Book[]>;
}