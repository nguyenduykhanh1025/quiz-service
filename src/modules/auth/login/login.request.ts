import { IsEmail, IsString } from "class-validator";
import { Request } from "express";

export interface LoginRequest extends Request {
  body: LoginDto;
}

export class LoginDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  password: string;
}
