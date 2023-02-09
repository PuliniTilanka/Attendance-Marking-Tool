import {Controller, Get, Query} from '@nestjs/common';
import {AdminDashboardService} from "./admin-dashboard.service";

@Controller('admin-dashboard')
export class AdminDashboardController {
    constructor(private readonly admindashboardService: AdminDashboardService) {}

    @Get('employees')
    getTotalEmployees() {
        return this.admindashboardService.getTotalEmployees();
    }

    @Get('attendance')
    getTotalAttendance(@Query('day') day: number) {
        return this.admindashboardService.getTotalAttendance(day);
    }
}
