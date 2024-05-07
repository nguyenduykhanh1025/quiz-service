import { HttpException } from "@quiz/core/exceptions/http.exception";
import { StatusCodes } from "http-status-codes";

export class UserNotFoundException extends HttpException {
  constructor(id: number) {
    super(StatusCodes.NOT_FOUND, `User '${id}' not found`);
  }
}
