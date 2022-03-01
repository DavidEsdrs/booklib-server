import { EntityRepository, Repository } from "typeorm";
import { Book } from "../../../entities/Book";
import { IBooksRepository } from "../IBooksRepository";

@EntityRepository(Book)
export class BooksRepository extends Repository<Book> implements IBooksRepository {
    async getBooks(options?: { take?: number, relations?: string[] }) {
        const books = await this.find({ 
            take: options.take, 
            relations: options.relations
        });
        return books;
    }
}