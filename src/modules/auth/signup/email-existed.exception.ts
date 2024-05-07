import { HttpException } from "@quiz/core/exceptions";
import { StatusCodes } from "http-status-codes";

export class EmailExistedException extends HttpException {
  constructor(email: string) {
    super(StatusCodes.CONFLICT, `Email '${email}' is already existed`);
  }
}
