import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Book } from "./Book";
import { User } from "./User";
import { v4 as uuid } from "uuid";

@Entity("reviews")
export class Review {
    @PrimaryColumn()
    readonly id: string;

    @ManyToOne(() => User, user => user.reviews)
    user: User;

    @ManyToOne(() => Book, book => book.reviews)
    book: Book;

    @Column()
    content: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}