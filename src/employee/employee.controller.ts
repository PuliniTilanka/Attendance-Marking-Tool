import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {EmployeeService} from "./employee.service";
import {Employee} from "./employee";


@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) {
    }

    @Get()
    async fillAll() {
        const response = await this.employeeService.findAll();
        return response;
        //res.status(HttpStatus.OK).json({payload: response});
    }

    @Get(":empId")
    async findOne(@Param() empId: number) {
        const response = await this.employeeService.findOne(empId);
        return response;
    }

    @Post()
    async create(@Body() createEmployeeDto: Employee) {
        const response = await this.employeeService.create(createEmployeeDto);
        return response;
    }

    @Put(":empId")
    async update(@Param() empId: number, @Body() createEmployeeDto: Employee) {
        const response = await this.employeeService.update(empId, createEmployeeDto);
        return response;
    }

    @Delete()
    async delete(@Body() empId: number) {
        const response = await this.employeeService.remove(empId);
        return response;
    }
}
