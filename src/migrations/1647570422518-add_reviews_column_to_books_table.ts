import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class addReviewsColumnToBooksTable1647570422518 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn("books", new TableColumn({
            name: "reviews",
            type: "varchar",
            isNullable: true,
            isArray: true
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

        await queryRunner.dropColumn("books", "reviews");
        await queryRunner.dropForeignKey("books", "book_reviews_fk");
    }

}
