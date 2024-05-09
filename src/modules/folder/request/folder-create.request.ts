import { IsString } from "class-validator";

export class FolderCreateRequest {
  @IsString()
  title: string;
}
