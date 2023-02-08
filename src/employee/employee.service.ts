import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Employee} from "./employee";

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee)
        private employeeRepository: Repository<Employee>,
    ) {
    }

    findAll(): Promise<Employee[]> {
        return this.employeeRepository.find();
    }

    findOne(empId: number): Promise<Employee> {
        return this.employeeRepository.findOne({where: {empId}});

    }

    create(user: Employee): Promise<Employee> {
        return this.employeeRepository.save(user);
    }

    async update(empId: number, user: Employee) {
        await this.employeeRepository.update(empId, user);
    }

    async remove(empId: number): Promise<void> {
        await this.employeeRepository.delete(empId);
    }
}


