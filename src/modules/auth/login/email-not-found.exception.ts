import { HttpException } from "@quiz/core/exceptions";
import { StatusCodes } from "http-status-codes";

export class EmailNotFoundException extends HttpException {
  constructor(email: string) {
    super(StatusCodes.NOT_FOUND, `Can not found '${email}'`);
  }
}
