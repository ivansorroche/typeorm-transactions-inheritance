import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";
import Log from "./Log";

@Entity()
export class Author extends Log{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    tags:string

    @Column()
    surname:string

    @Column()
    completeName: string

    @OneToMany(() => Post, (post) => post.author, { cascade: true})
    posts: Post[]
}