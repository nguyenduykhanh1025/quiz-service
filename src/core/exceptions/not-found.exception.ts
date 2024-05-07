import { StatusCodes } from "http-status-codes";
import { HttpException } from "./http-exception";

export class NotFoundException extends HttpException {
  constructor(modelName: string, id: string) {
    super(StatusCodes.NOT_FOUND, `${modelName} with id '${id}' not found!`);
  }
}
