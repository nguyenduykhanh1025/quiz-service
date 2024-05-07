import { IsString } from "class-validator";

export class FolderUpdateRequest {
  @IsString()
  id: string;

  @IsString()
  title: string;
}
