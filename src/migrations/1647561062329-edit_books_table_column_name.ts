import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class editBooksTableColumnName1647561062329 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.changeColumn("books", "review", new TableColumn({
            name: "reviews",
            type: "varchar",
            isArray: true,
            isNullable: true
        }));

        await queryRunner.createForeignKey("books", new TableForeignKey({
            name: "book_reviews_fk",
            referencedTableName: "reviews",
            referencedColumnNames: [ "id" ],
            columnNames: [ "reviews" ],
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropForeignKey("books", "book_reviews_fk");
        await queryRunner.dropColumn("books", "reviews");
    }

}
