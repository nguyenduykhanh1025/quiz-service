import { IsString } from "class-validator";

export class TermCreateRequest {
  @IsString()
  key: string;

  @IsString()
  definition: string;
}
