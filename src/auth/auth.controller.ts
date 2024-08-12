/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/student/dto/login.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
    @Post('login')
    Login(@Body() payload: LoginDto){
        return this.authService.login(payload.name, payload.reg_no);
    }

    @Get('profile')
    @UseGuards(AuthGuard)
    getProfile(@Request() req){
        return req.student
    }
}
