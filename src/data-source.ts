import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Post } from "./entity/Post"
import { Author } from "./entity/Author"
import { Comment } from "./entity/Comment"
import Log from "./entity/Log"
import { Init1708731603702 as AllMigrations } from "./migration/1708731603702-init"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: "all",
    entities: [User, Post, Author, Comment, Log],
    migrations: [AllMigrations],
    subscribers: [],
})
