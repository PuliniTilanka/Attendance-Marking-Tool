import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "attendance"})
export class Attendance {
    @PrimaryGeneratedColumn()
    attId: number;

    @Column()
    empId: number;
    @Column()
    empName: string;
    @Column()
    //inTime: Time;
    @Column()
    year: number;
    @Column()
    month: string;
    @Column()
    day: number;
    @Column()
    attType: string;
    @Column()
    attend: boolean;

}