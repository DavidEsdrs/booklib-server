import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Book } from "./Book";
import { Review } from "./Review";
import { Exclude } from "class-transformer";

@Entity("users")
export class User {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Exclude()
    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToMany(() => Book, book => book.favorited_by)
    @JoinTable()
    favorited_books: Book[];

    @OneToMany(() => Review, review => review.user)
    @JoinColumn()
    reviews: Review[];

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}