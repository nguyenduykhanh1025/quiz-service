import { Request, Response, NextFunction } from "express";
import { HttpException } from "../exceptions";
import { BodyResponse } from "../models";

export function errorHandler(
  err: any,
  _: Request,
  res: Response,
  __: NextFunction
) {
  console.error("ERROR_HANDLER::", err);
  if (!(err instanceof HttpException)) {
    res.status(500).send({
      message: "Server error, please try again later",
      additionalInfo: err,
    });
  } else {
    const customError = err as HttpException;
    const response: BodyResponse = {
      message: customError.message,
    };
    res.status(customError.status).type("json").send(JSON.stringify(response));
  }
}
