/* eslint-disable prettier/prettier */
import { HttpException, Injectable, Param } from '@nestjs/common';
import { UserDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(@InjectRepository(Student) private studentRepository: Repository<Student>){}

  async create(createStudentDto: UserDto): Promise<Student> {
    const createdStudent = await this.studentRepository.create(createStudentDto)
    if (createdStudent){
    return this.studentRepository.save(createdStudent);
    }
    else throw new HttpException(`Student has not being created, try again`, 404)
  }

  async findAll(): Promise<Student[]> {
    return await this.studentRepository.find()
  }

  async findOne(id): Promise<Student>{
    return await this.studentRepository.findOne({where:{id:id}});
  }

  update(id: string, updateStudentDto: UpdateStudentDto) {
    return this.studentRepository.update(id, updateStudentDto)
  }

  remove(id: string) {
    return this.studentRepository.delete(id);
  }
}
