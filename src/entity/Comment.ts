import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import Log from "./Log";

@Entity()
export class Comment extends Log{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text:string

    @ManyToOne(() => User, (user) => user.comments, {
        onDelete: "CASCADE"
    })
    users: User
}