import { HttpException } from "@quiz/core/exceptions/http.exception";
import { StatusCodes } from "http-status-codes";

export class RefreshTokenNotFoundException extends HttpException {
  constructor(token: string) {
    super(StatusCodes.NOT_FOUND, `Token '${token}' not found`);
  }
}
