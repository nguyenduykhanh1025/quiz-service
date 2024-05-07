import { Request, Response, NextFunction } from "express";
import { UnauthorizedException } from "../exceptions";
import { TokenHelper } from "../helpers/token.helper";
import { errorHandler } from "./error-handler.middleware";

export async function authentication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = TokenHelper.getFromReq(req);
    TokenHelper.verify(token);
    next();
  } catch (error) {
    errorHandler(new UnauthorizedException(), req, res, next);
  }
}
