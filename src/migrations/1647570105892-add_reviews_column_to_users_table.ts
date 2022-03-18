import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class addReviewsColumnToUsersTable1647570105892 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn("users", new TableColumn({
            name: "reviews",
            type: "varchar",
            isArray: true,
            isNullable: true
        }));

        await queryRunner.createForeignKey("users", new TableForeignKey({
            name: "user_reviews_fk",
            referencedTableName: "reviews",
            referencedColumnNames: [ "id" ],
            columnNames: [ "reviews" ],
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn("users", "reviews");
        await queryRunner.dropForeignKey("users", "user_reviews_fk");
    }

}
