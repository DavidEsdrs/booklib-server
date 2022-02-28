import { EntityRepository, Repository } from "typeorm";
import { Book } from "../../../entities/Book";
import { IBooksRepository } from "../IBooksRepository";

@EntityRepository(Book)
export class BooksRepository extends Repository<Book> implements IBooksRepository {}