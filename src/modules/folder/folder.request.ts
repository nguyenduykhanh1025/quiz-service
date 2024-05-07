import { IsString } from "class-validator";
import { Request } from "express";

export interface FolderRequest extends Request {
  body: FolderDto;
}

export class FolderDto {
  @IsString()
  title: string;
}
