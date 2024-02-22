import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Post } from "./entity/Post"
import { Author } from "./entity/Author"
import { Comment } from "./entity/Comment"
import { Init1708560197990 as allmigrations } from './migration/1708560197990-init'

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: "all",
    entities: [User, Post, Author, Comment],
    migrations: [allmigrations],
    subscribers: [],
})
