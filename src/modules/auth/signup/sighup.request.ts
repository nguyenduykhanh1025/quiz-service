import { IsEmail, IsString } from "class-validator";
import { Request } from "express";

export interface SignupRequest extends Request {
  body: UserDto;
}

export class UserDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  fullName: string;

  @IsString()
  password: string;
}
