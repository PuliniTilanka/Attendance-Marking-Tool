import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AdminDashboardController} from './admin_dashboard/admin_dashboard.controller';
import {EmployeeModule} from './employee/employee.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {HolidayModule} from './holiday/holiday.module';
import {AttendanceModule} from './attendance/attendance.module';
import {Employee} from "./employee/employee";
import {Holiday} from "./holiday/holiday";
import {Attendance} from "./attendance/attendance";

@Module({
    imports: [EmployeeModule, HolidayModule, AttendanceModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'pulini',
            database: 'attendance_mgt_tool',
            entities: [Employee, Holiday, Attendance],
            synchronize: false,
        })],
    controllers: [AppController,
        AdminDashboardController],
    providers: [AppService,
    ],
})
export class AppModule {
}
