import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addContentColumnToTheReviewsTable1647811259086 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn("reviews", new TableColumn({
            name: "content",
            type: "varchar",
            isNullable: false
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn("reviews", "content");
    }

}
