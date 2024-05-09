import { Type } from "class-transformer";
import { IsString, ValidateNested } from "class-validator";
import { TermCreateRequest } from "./term.request";

export class LessonCreateRequest {
  @IsString()
  title: string;

  @IsString()
  description: string;

  school: string;

  subject: string;

  @ValidateNested({
    each: true,
  })
  @Type(() => TermCreateRequest)
  terms: TermCreateRequest[];
}