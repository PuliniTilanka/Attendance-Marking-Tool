import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {AttendanceService} from "./attendance.service";
import {Attendance} from "./attendance";

@Controller('attendance')
export class AttendanceController {
    constructor(private attendanceService: AttendanceService) {
    }

    @Get()
    async fillAll() {
        const response = await this.attendanceService.findAll();
        return response;
        //res.status(HttpStatus.OK).json({payload: response});
    }

    @Get(":attId")
    async findOne(@Param() attId: number) {
        const response = await this.attendanceService.findOne(attId);
        return response;
    }

    @Post()
    async create(@Body() createAttendanceDto: Attendance) {
        const response = await this.attendanceService.create(createAttendanceDto);
        return response;
    }

    @Put(":attId")
    async update(@Param() attId: number, @Body() createAttendanceDto: Attendance) {
        const response = await this.attendanceService.update(attId, createAttendanceDto);
        return response;
    }

    @Delete()
    async delete(@Body() attId: number) {
        const response = await this.attendanceService.remove(attId);
        return response;
    }
}
