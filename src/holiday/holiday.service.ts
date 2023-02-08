import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Holiday} from "./holiday";

@Injectable()
export class HolidayService {
    constructor(
        @InjectRepository(Holiday)
        private holidayRepository: Repository<Holiday>,
    ) {
    }

    findAll(): Promise<Holiday[]> {
        return this.holidayRepository.find();
    }

    findOne(holidayId: number): Promise<Holiday> {
        return this.holidayRepository.findOne({where: {holidayId}});

    }

    create(holiday: Holiday): Promise<Holiday> {
        return this.holidayRepository.save(holiday);
    }

    async update(holidayId: number, holiday: Holiday) {
        await this.holidayRepository.update(holidayId, holiday);
    }

    async remove(holidayId: number): Promise<void> {
        await this.holidayRepository.delete(holidayId);
    }
}
