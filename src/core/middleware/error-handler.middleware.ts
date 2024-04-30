import { Request, Response, NextFunction } from "express";
import { CustomError, IResponseError } from "../exceptions/custom-error";

// TODO: try to improve this handler
export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);
  if (!(err instanceof CustomError)) {
    res.status(500).send(
      {
        message: "Server error, please try again later",
        status: 500,
        additionalInfo: err
      }
    );
  } else {
    const customError = err as CustomError;
    const response = {
      message: customError.message,
    } as IResponseError;
    // Check if there is more info to return.
    if (customError.additionalInfo)
      response.additionalInfo = customError.additionalInfo;
    res.status(customError.status).type("json").send(JSON.stringify(response));
  }
}
