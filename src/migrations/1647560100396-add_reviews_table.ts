import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class addReviewsTable1647560100396 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: "reviews",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: "user",
                    type: "varchar"
                },
                {
                    name: "book",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ],
            foreignKeys: [
                {
                    name: "reviews_user_fk",
                    referencedTableName: "users",
                    referencedColumnNames: [ "id" ],
                    columnNames: [ "user" ],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                },
                {
                    name: "reviews_book_fk",
                    referencedTableName: "books",
                    referencedColumnNames: [ "id" ],
                    columnNames: [ "book" ],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("reviews");
    }

}
