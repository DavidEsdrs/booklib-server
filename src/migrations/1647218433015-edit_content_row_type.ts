import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class editContentRowType1647218433015 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.changeColumn("books", "content", new TableColumn({
            name: "content",
            type: "blob",
            isNullable: false
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.changeColumn("books", "content", new TableColumn({
            name: "content",
            type: "varchar"
        }));
    }

}
