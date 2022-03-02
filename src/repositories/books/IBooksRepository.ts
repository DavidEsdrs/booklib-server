import { Book } from "../../entities/Book";

export interface IGetBooksOptions {
    take?: number;
    relations?: string[];
}

export interface IGetBookOptions {
    id?: string;
    title?: string;
    author?: string;
    published_before?: Date;
    published_after?: Date;
    created_at?: Date;
}

export interface IBooksRepository {
    create(args: Partial<Book>): Book;
    save(book: Book): Promise<void>;
    getBooks(options?: IGetBooksOptions): Promise<Book[]>;
    getBook(options: IGetBookOptions): Promise<Book>;
    deleteBook(id: string): Promise<void>;
}