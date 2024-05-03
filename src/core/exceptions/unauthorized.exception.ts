import { HttpException } from "@quiz/core/exceptions/http.exception";
import { StatusCodes } from "http-status-codes";

export class UnauthorizedException extends HttpException {
  constructor() {
    super(StatusCodes.UNAUTHORIZED, `Authentication invalid!`);
  }
}
