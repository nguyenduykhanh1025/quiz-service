import { StatusCodes } from "http-status-codes";
import { HttpException } from "./http-exception";

export class UnauthorizedException extends HttpException {
  constructor() {
    super(StatusCodes.UNAUTHORIZED, `Authentication invalid!`);
  }
}
