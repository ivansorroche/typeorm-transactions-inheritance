import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne } from "typeorm"
import { Author } from "./Author"
import Log from "./Log"

@Entity()
@Unique(["title"])
export class Post extends Log{

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