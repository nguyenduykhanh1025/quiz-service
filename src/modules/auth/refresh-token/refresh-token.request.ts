import { IsString } from "class-validator";
import { Request } from "express";

export interface RefreshTokenRequest extends Request {
  body: RefreshTokenDto;
}

export class RefreshTokenDto {
  @IsString()
  token: string;
}
