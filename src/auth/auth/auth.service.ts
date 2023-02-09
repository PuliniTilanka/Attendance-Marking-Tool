import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    private readonly employees = [
        {
            empId: 1,
            email: 'admin@gmail.com',
            password: 'admin',
        },
    ];
    async validateEmployee(email: string, pass: string): Promise<any> {
        const employee = this.employees.find(e => e.email === email && e.password === pass);
        if (employee) {
            const { password, ...result } = employee;
            return result;
        }
        return null;
    }
}