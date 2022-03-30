import { EntityRepository, MoreThan, Repository } from "typeorm";
import { Book } from "../../../entities/Book";
import { IBooksRepository, IGetBookOptions } from "../IBooksRepository";
import { unlink } from "fs";
import { resolve } from "path";
import { promisify } from "util";

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

    async getBook({ id, relations  }: IGetBookOptions) {
        const book = await this.findOne(id, { relations });
        return book;
    }

    async deleteBook({ id, file }: { id: string, file: string }) {
        const removeFileAsync = promisify(unlink);
        try {
            await removeFileAsync(resolve(__dirname, "..", "..", "..", "..", "uploads", file));
            await this.delete({ id });
        }
        catch(err) {
            console.error({err})
            throw new Error("Can't remove file!");
        }
    }
}