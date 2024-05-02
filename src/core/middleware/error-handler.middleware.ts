import { Request, Response, NextFunction } from "express";
import { HttpException, ResponseError } from "../exceptions/http.exception";

export function errorHandler(
  err: any,
  _: Request,
  res: Response,
  __: NextFunction
) {
  console.error(err);
  if (!(err instanceof HttpException)) {
    res.status(500).send(
      {
        message: "Server error, please try again later",
        status: 500,
        additionalInfo: err
      }
    );
  } else {
    const customError = err as HttpException;
    const response = {
      message: customError.message,
    } as ResponseError;
    // Check if there is more info to return.
    if (customError.additionalInfo)
      response.additionalInfo = customError.additionalInfo;
    res.status(customError.status).type("json").send(JSON.stringify(response));
  }
}
