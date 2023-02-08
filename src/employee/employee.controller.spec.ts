import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeController } from './employee.controller';
import {EmployeeService} from "./employee.service";
import {AttendanceController} from "../attendance/attendance.controller";
import {AttendanceService} from "../attendance/attendance.service";

describe('EmployeeController',  () => {
  let employeecontroller: EmployeeController;

  const mockEmployeeService = {
    create: jest.fn(dto =>{
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
    const dto = {empId:expect.any(Number), name: 'Harini', email:'harini@gmail.com', password: 'Harini#888', designation: 'Quality Assurance', type: 'Permenant', phoneNumber:778695423};
    expect(employeecontroller.create(dto)).toEqual({
      empId: expect.any(Number),
      name: dto.name,
      email:dto.email,
      password: dto.password,
      designation: 'Quality Assurance',
      type: 'Permenant',
      phoneNumber:778695423,
    });

    expect(mockEmployeeService.create).toHaveBeenCalledWith({empId:expect.any(Number), name: 'Harini', email:'harini@gmail.com', password: 'Harini#888', designation: 'Quality Assurance', type: 'Permenant', phoneNumber:778695423});
  });

  describe('AttendanceController',  () => {
    let attendancecontroller: AttendanceController;

    const mockAttendanceService = {
      create: jest.fn(dto =>{
        return {
          attId: Date.now(),
          ...dto
        }
      })
    };

    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        controllers: [AttendanceController],
        providers: [AttendanceService],
      })
          .overrideProvider(AttendanceService)
          .useValue(mockAttendanceService)
          .compile();

      attendancecontroller = module.get<AttendanceController>(AttendanceController);
    });


    it('should mark an attendance', () => {
      const dto1 = {attId:expect.any(Number), empId: 1, empName: 'Pulini', year: 2023, month: 'January', day: 30, attType:'Full day', attend: 1};
      expect(attendancecontroller.create(dto1)).toEqual({
        attId: expect.any(Number),
        empId: dto1.empId,
        empName: dto1.empName,
        year: dto1.year,
        month: dto1.month,
        day: dto1.day,
        attType: dto1.attType,
        attend: dto1.attend,

      });

      expect(mockAttendanceService.create).toHaveBeenCalledWith({attId:expect.any(Number), empId: 1, empName: 'Pulini', year: 2023, month: 'January', day: 30, attType:'Full day', attend: 1});
    });

});
