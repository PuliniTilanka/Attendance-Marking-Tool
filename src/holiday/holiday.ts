import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "holiday"})
export class Holiday {
    @PrimaryGeneratedColumn()
    holidayId: number;

    @Column()
    name: string;
    @Column()
    date: Date;


}
