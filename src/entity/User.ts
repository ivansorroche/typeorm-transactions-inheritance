import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Comment } from "./Comment"
import Log from "./Log"

@Entity()
export class User extends Log{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string 

    @OneToMany(() => Comment, (comment) => comment.users, { cascade: true})
    comments: Comment[]

}
