/* eslint-disable prettier/prettier */
import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { StudentService } from 'src/student/student.service';

@Injectable()
export class AuthService {
    constructor(private studentService: StudentService, private jwtService: JwtService){}
    async login(name:string, reg_no: string): Promise<{access_token: string}>{
        const student = await this.studentService.findByNameAndPass(name, reg_no)
        if(student?.reg_no !== reg_no){
            throw new HttpException(`Incorrect Credentials`, 400)
        }
        const payload = { name: student.name, regNo: student.reg_no}
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}
