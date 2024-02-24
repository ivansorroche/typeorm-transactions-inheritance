import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1708731603702 implements MigrationInterface {
    name = 'Init1708731603702'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_comment" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "text" varchar NOT NULL, "usersId" integer, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "FK_7be841194147978a20d2b4720c7" FOREIGN KEY ("usersId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_comment"("id", "text", "usersId") SELECT "id", "text", "usersId" FROM "comment"`);
        await queryRunner.query(`DROP TABLE "comment"`);
        await queryRunner.query(`ALTER TABLE "temporary_comment" RENAME TO "comment"`);
        await queryRunner.query(`CREATE TABLE "temporary_author" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "tags" varchar NOT NULL, "surname" varchar NOT NULL, "completeName" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "temporary_author"("id", "tags", "surname", "completeName") SELECT "id", "tags", "surname", "completeName" FROM "author"`);
        await queryRunner.query(`DROP TABLE "author"`);
        await queryRunner.query(`ALTER TABLE "temporary_author" RENAME TO "author"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "author" RENAME TO "temporary_author"`);
        await queryRunner.query(`CREATE TABLE "author" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "tags" varchar NOT NULL, "surname" varchar NOT NULL, "completeName" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "author"("id", "tags", "surname", "completeName") SELECT "id", "tags", "surname", "completeName" FROM "temporary_author"`);
        await queryRunner.query(`DROP TABLE "temporary_author"`);
        await queryRunner.query(`ALTER TABLE "comment" RENAME TO "temporary_comment"`);
        await queryRunner.query(`CREATE TABLE "comment" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "text" varchar NOT NULL, "usersId" integer, CONSTRAINT "FK_7be841194147978a20d2b4720c7" FOREIGN KEY ("usersId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "comment"("id", "text", "usersId") SELECT "id", "text", "usersId" FROM "temporary_comment"`);
        await queryRunner.query(`DROP TABLE "temporary_comment"`);
    }

}
