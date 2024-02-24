import { CreateDateColumn } from "typeorm"
export default abstract class Log {
    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;
}
