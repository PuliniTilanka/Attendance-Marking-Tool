import {Module} from '@nestjs/common';
import {EmployeeService} from "./employee.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {EmployeeController} from "./employee.controller";
import {Employee} from "./employee";

@Module({
    imports: [TypeOrmModule.forFeature([Employee])],
    controllers: [EmployeeController],
    providers: [EmployeeService],

})
export class EmployeeModule {
}
