import { EntityRepository, MoreThan, Repository } from "typeorm";
import { Book } from "../../../entities/Book";
import { IBooksRepository, IGetBookOptions } from "../IBooksRepository";

@EntityRepository(Book)
export class BooksRepository extends Repository<Book> implements IBooksRepository {
    async getBooks(options?: { take?: number, relations?: string[] }) {
        const books = await this.find({ 
            take: options.take, 
            relations: options.relations,
            order: {
                created_at: "DESC"
            }
        });
        return books;
    }

    async getBook({ id  }: IGetBookOptions) {
        const book = await this.findOne(id);
        return book;
    }

    async deleteBook(id: string) {
        await this.delete({ id });
    }

    async review({ id, review }: { id: string; review: string; }) {
        await this.update({ id }, { review });
    }
}