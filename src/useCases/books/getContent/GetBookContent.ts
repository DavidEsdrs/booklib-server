import { createReadStream } from "fs";
import { resolve } from "path";
import { IBooksRepository } from "../../../repositories/books/IBooksRepository";

export class GetBookContent {
    constructor(private booksRepo: IBooksRepository) {}

    execute(file: string) {
        const readbleStream = createReadStream(resolve(__dirname, "..", "..", "..", "..", "uploads", file));
        return readbleStream;
    }
}