import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {EmployeeModule} from './employee/employee.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {HolidayModule} from './holiday/holiday.module';
import {AttendanceModule} from './attendance/attendance.module';
import {Employee} from "./employee/employee";
import {Holiday} from "./holiday/holiday";
import {Attendance} from "./attendance/attendance";
import {AuthModule} from './auth/auth.module';
import {AdminDashboardModule} from './admin-dashboard/admin-dashboard.module';

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
        }),
        AuthModule,
        AdminDashboardModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
