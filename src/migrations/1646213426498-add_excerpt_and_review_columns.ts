import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addExcerptAndReviewColumns1646213426498 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn("books", new TableColumn({
            name: "excerpt",
            type: "varchar",
            isNullable: true
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumns("books", [ "excerpt", "review" ]);
    }

}
