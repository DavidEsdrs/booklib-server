import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Review } from "./Review";
import { User } from "./User";
import { Exclude } from "class-transformer";

@Entity("books")
export class Book {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    title: string;

    @Column()
    author: string;

    @Exclude()
    @Column({ type: "blob" })
    content: any;

    @Column({ nullable: true }) 
    excerpt: string;

    @OneToMany(() => Review, review => review.book)
    @JoinColumn()
    reviews: Review[];

    @Column()
    published_at: Date;

    @CreateDateColumn()
    created_at: Date;

    @ManyToMany(() => User, user => user.favorited_books)
    favorited_by: User[];

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}