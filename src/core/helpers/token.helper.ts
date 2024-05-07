import { Request } from "express";
import { UnauthorizedException } from "../exceptions";
import jwt from "jsonwebtoken";
import config from "../config";
import { JwtPayload } from "../models/jwt-payload.model";

export class TokenHelper {
  static getFromReq(req: Request): string {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new UnauthorizedException();
    }

    // the format of authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
    return authorization.split(" ")[1];
  }

  static verify(token: string): JwtPayload {
    return jwt.verify(token, config.jwt.secret) as JwtPayload;
  }

  static getUserIdFromReq(req: Request): string {
    const token = this.getFromReq(req);
    return this.verify(token).user_id;
  }

  static getUserIdFromToken(token: string): string {
    return this.verify(token).user_id;
  }
}
