import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {HolidayService} from "./holiday.service";
import {Holiday} from "./holiday";

@Controller('holiday')
export class HolidayController {
    constructor(private holidayService: HolidayService) {
    }

    @Get()
    async fillAll() {
        const response = await this.holidayService.findAll();
        return response;
        //res.status(HttpStatus.OK).json({payload: response});
    }

    @Get(":holidayId")
    async findOne(@Param() holidayId: number) {
        const response = await this.holidayService.findOne(holidayId);
        return response;
    }

    @Post()
    async create(@Body() createHolidayDto: Holiday) {
        const response = await this.holidayService.create(createHolidayDto);
        return response;
    }

    @Put(":holidayId")
    async update(@Param() holidayId: number, @Body() createHolidayDto: Holiday) {
        const response = await this.holidayService.update(holidayId, createHolidayDto);
        return response;
    }

    @Delete()
    async delete(@Body() holidayId: number) {
        const response = await this.holidayService.remove(holidayId);
        return response;
    }
}
