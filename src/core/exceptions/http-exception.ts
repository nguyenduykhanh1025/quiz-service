import { StatusCodes } from "http-status-codes";

export class HttpException extends Error {
  status: StatusCodes;
  message: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}
