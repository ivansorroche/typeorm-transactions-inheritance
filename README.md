# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Run `npm build` command
3. Run `npm start` command


Steps to new Migration:

1. Create `Entity`
2. Add `Entity` in `data-source.ts` ex `entities: [name]`
3. run `npx typeorm-ts-node-commonjs migration:generate src/migration/init --dataSource src/data-source.ts` command
4. Add migration in `data-source.ts` ex `migrations: [name]`

IMPORTANT - if an error occours with database, delete database. Because new tables was added.
