import {Body, Controller, HttpException, HttpStatus, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('login')
    async login(@Body() body) {
        const employee = await this.authService.validateEmployee(body.email, body.password);
        if (!employee) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }
        return employee;
    }
}
