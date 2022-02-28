import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBooksTable1646090514582 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: "books",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: "title",
                    type: "varchar"
                },
                {
                    name: "author",
                    type: "varchar"
                },
                {
                    name: "content",
                    type: "varchar"
                },
                {
                    name: "published_at",
                    type: "timestamp"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("books");
    }

}
