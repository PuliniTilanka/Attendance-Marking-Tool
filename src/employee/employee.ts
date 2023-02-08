import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "employee"})
export class Employee {
    @PrimaryGeneratedColumn()
    empId: number;

    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    designation: string;
    @Column()
    type: string;
    @Column()
    phoneNumber: number;

}
