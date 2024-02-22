import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Comment{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text:string

    @ManyToOne(() => User, (user) => user.comments, {
        onDelete: "CASCADE"
    })
    users: User
}