import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsersTable1647305704929 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: "username",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "email",
                    type: "varchar",
                    isUnique: true,
                    isNullable: false
                },
                {
                    name: "password",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "favorited_books",
                    type: "varchar",
                    isArray: true,
                    isNullable: true
                }
            ],
            foreignKeys: [
                {
                    name: "users_books_fk",
                    referencedTableName: "books",
                    referencedColumnNames: [ "id" ],
                    columnNames: [ "favorited_books" ],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("users");
    }

}
