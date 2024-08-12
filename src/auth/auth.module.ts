/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { StudentModule } from 'src/student/student.module';
import { JwtModule } from '@nestjs/jwt';
import { JWTSECRET } from './constant';

@Module({
  imports: [StudentModule, JwtModule.register({
    global: true,
    secret: JWTSECRET.secret,
    signOptions: {expiresIn: '1h'}
  })],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
