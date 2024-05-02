import { IsEmail, IsString } from "class-validator";
import { Request } from "express";

export interface SignupRequest extends Request {
  body: SignupDto;
}

export class SignupDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  fullName: string;

  @IsString()
  password: string;
}
