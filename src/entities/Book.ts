import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("books")
export class Book {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    content: string;

    @Column()
    published_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}