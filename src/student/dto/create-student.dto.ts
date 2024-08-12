/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsString({message: `It must be a string`})
  @IsNotEmpty({message: `There should be a Student's name`})
  name: string;
  @IsString()
  @IsNotEmpty()
  department: string;
  @IsString()
  @IsNotEmpty({message: `This should not be empty`})
  reg_no: string;
}
