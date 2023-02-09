import {Injectable} from '@nestjs/common';

@Injectable()
export class AdminDashboardService {
    private readonly employee = [
        {empId: 1, name: 'Pradeep'},
        {empId: 2, name: 'Ganeesha'},
    ];

    private readonly attendance = [
        {empId: 1, year: 2023, month: 'January', day: 31, attend: true},
        {empId: 2, year: 2023, month: 'January', day: 31, attend: false},
    ];

    getTotalEmployees(): number {
        return this.employee.length;
    }

    getTotalAttendance(date: number): number {
        return this.attendance.filter(a => a.day === date && a.attend).length;
    }

}
