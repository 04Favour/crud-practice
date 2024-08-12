/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/student/dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
    @Post('login')
    Login(@Body() payload: LoginDto){
        return this.authService.login(payload.name, payload.reg_no);
    }
}
