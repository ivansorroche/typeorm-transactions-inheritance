import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne } from "typeorm"
import { Author } from "./Author"

@Entity()
@Unique(["title"])
export class Post {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    text: string

    @ManyToOne(() => Author, (user) => user.posts, {
        onDelete: "CASCADE"
    })
    author: Author

}