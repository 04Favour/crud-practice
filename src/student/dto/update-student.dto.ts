import { PartialType } from '@nestjs/mapped-types';
import { UserDto } from './create-student.dto';

export class UpdateStudentDto extends PartialType(UserDto) {}
