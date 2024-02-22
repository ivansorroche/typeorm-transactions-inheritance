import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";

@Entity()
export class Author{
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