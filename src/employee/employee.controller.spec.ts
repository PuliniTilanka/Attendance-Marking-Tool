import {Test, TestingModule} from '@nestjs/testing';
import {EmployeeController} from './employee.controller';
import {EmployeeService} from "./employee.service";

describe('EmployeeController', () => {
    let employeecontroller: EmployeeController;

    const mockEmployeeService = {
        create: jest.fn(dto => {
            return {
                empId: Date.now(),
                ...dto
            }
        })
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [EmployeeController],
            providers: [EmployeeService],
        })
            .overrideProvider(EmployeeService)
            .useValue(mockEmployeeService)
            .compile();

        employeecontroller = module.get<EmployeeController>(EmployeeController);
    });

    it('should be defined', () => {
        expect(employeecontroller).toBeDefined();
    });

    it('should create a user', () => {
        const dto = {
            empId: expect.any(Number),
            name: 'Harini',
            email: 'harini@gmail.com',
            password: 'Harini#888',
            designation: 'Quality Assurance',
            type: 'Permenant',
            phoneNumber: 778695423
        };
        expect(employeecontroller.create(dto)).toEqual({
            empId: expect.any(Number),
            name: dto.name,
            email: dto.email,
            password: dto.password,
            designation: 'Quality Assurance',
            type: 'Permenant',
            phoneNumber: 778695423,
        });

        expect(mockEmployeeService.create).toHaveBeenCalledWith({
            empId: expect.any(Number),
            name: 'Harini',
            email: 'harini@gmail.com',
            password: 'Harini#888',
            designation: 'Quality Assurance',
            type: 'Permenant',
            phoneNumber: 778695423
        });
    });

});
