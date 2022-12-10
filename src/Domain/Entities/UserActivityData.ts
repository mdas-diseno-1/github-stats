import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UserActivityData {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    pullRequestsExecuted: number
}
