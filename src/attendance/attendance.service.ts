import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Attendance} from "./attendance";


@Injectable()
export class AttendanceService {
    constructor(
        @InjectRepository(Attendance)
        private attendanceRepository: Repository<Attendance>,
    ) {
    }

    findAll(): Promise<Attendance[]> {
        return this.attendanceRepository.find();
    }

    findOne(attId: number): Promise<Attendance> {
        return this.attendanceRepository.findOne({where: {attId}});

    }

    create(attendance: Attendance): Promise<Attendance> {
        return this.attendanceRepository.save(attendance);
    }

    async update(attId: number, attendance: Attendance) {
        await this.attendanceRepository.update(attId, attendance);
    }

    async remove(attId: number): Promise<void> {
        await this.attendanceRepository.delete(attId);
    }
}
