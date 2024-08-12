/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { UserDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { LoginDto } from './dto/login.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() createStudentDto: UserDto) {
    return this.studentService.create(createStudentDto);
  }

  @Get('findall')
  async findAll(): Promise<Student[]> {
    return await this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(id);
  }

  @Post('by')
  async ByNameAndPass(@Body() payload:LoginDto): Promise<{name}>{
    return await this.studentService.findByNameAndPass(payload.name, payload.reg_no)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto): Promise<{msg, httpCode}> {
    await this.studentService.update(id, updateStudentDto);
    return {
      msg: `Student succesfully Updated`,
      httpCode: 201
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(id);
  }
}
