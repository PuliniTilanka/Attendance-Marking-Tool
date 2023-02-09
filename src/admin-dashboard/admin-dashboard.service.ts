import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminDashboardService {
    private readonly employees = [
        { empId: 1, name: 'John Doe' },
        { empId: 2, name: 'Jane Doe' },
    ];

    private readonly attendance = [
        { empId: 1, day: 31, attend: true },
        { empId: 2, day: 31, present: false },
    ];
    getTotalEmployees(): number {
        return this.employees.length;
    }

    getTotalAttendance(date: number): number {
        return this.attendance.filter(a => a.day === date && a.present).length;
    }

}
