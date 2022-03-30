import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class addPublishedByColumnInTheBooksTable1648589862573 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn("books", new TableColumn({
            name: "published_by",
            type: "varchar",
            isNullable: true
        }));

        await queryRunner.createForeignKey("books", new TableForeignKey({
            name: "published_by_books_users_fk",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["published_by"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("books", "published_by");
        await queryRunner.dropForeignKey("books", "published_by_books_users_fk");
    }

}
