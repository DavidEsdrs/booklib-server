import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class addFavoritedByColumnInBooksTable1647306715711 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn("books", new TableColumn({
            name: "favorited_by",
            type: "varchar",
            isArray: true,
            isNullable: true
        }));

        await queryRunner.createForeignKey("books", new TableForeignKey({
            name: "books_users_fk",
            referencedTableName: "users",
            referencedColumnNames: [ "id" ],
            columnNames: [ "favorited_by" ],
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropForeignKey("books", "books_users_fk");
        await queryRunner.dropColumn("books", "favorited_by");
    }

}
