import { Module } from '@nestjs/common';
import { HolidayService } from './holiday.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {HolidayController} from "./holiday.controller";
import {Holiday} from "./holiday";


@Module({
  imports: [TypeOrmModule.forFeature([Holiday])],
  controllers: [HolidayController],
  providers: [HolidayService],

})
export class HolidayModule {}
