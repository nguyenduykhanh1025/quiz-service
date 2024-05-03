import { HttpException } from "@quiz/core/exceptions/http.exception";
import { StatusCodes } from "http-status-codes";

export class RefreshTokenExpiredException extends HttpException {
  constructor(token: string) {
    super(StatusCodes.GONE, `Token '${token}' expired`);
  }
}
