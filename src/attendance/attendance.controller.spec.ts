import {Test, TestingModule} from '@nestjs/testing';
import {AttendanceController} from './attendance.controller';
import {AttendanceService} from "./attendance.service";

describe('AttendanceController', () => {
    let attendancecontroller: AttendanceController;

    const mockAttendanceService = {
        create: jest.fn(dto => {
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
        const dto = {
            attId: expect.any(Number),
            empId: 1,
            empName: 'Pulini',
            year: 2023,
            month: 'January',
            day: 30,
            attType: 'Full day',
            attend: true
        };
        expect(attendancecontroller.create(dto)).toEqual({
            attId: expect.any(Number),
            empId: dto.empId,
            empName: dto.empName,
            year: dto.year,
            month: dto.month,
            day: dto.day,
            attType: dto.attType,
            attend: dto.attend,

        });

        expect(mockAttendanceService.create).toHaveBeenCalledWith({
            attId: expect.any(Number),
            empId: 1,
            empName: 'Pulini',
            year: 2023,
            month: 'January',
            day: 30,
            attType: 'Full day',
            attend: 1
        });
    });

});
