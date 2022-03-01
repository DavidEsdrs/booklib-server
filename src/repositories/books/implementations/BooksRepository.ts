import { EntityRepository, MoreThan, Repository } from "typeorm";
import { Book } from "../../../entities/Book";
import { IBooksRepository, IGetBookOptions } from "../IBooksRepository";

@EntityRepository(Book)
export class BooksRepository extends Repository<Book> implements IBooksRepository {
    async getBooks(options?: { take?: number, relations?: string[] }) {
        const books = await this.find({ 
            take: options.take, 
            relations: options.relations
        });
        return books;
    }

    async getBook({ id, author, title, published_after, published_before, created_at }: IGetBookOptions) {
        const book = await this.createQueryBuilder("book").
            where("id = :b_id OR author = :b_author OR title = :b_title OR published_at > :b_p_after OR published_at < :b_p_before OR created_at = :b_created_at", { b_id: id, b_author: author, b_title: title, b_p_after: published_after, b_p_before: published_before, b_created_at: created_at }).
            getOne();

        return book;
    }
}