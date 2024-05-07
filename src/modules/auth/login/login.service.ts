import config from "@quiz/core/config";
import { JwtPayload } from "@quiz/core/models/jwt-payload.model";
import { IUser } from "@quiz/modules/user/user.model";
import jwt from "jsonwebtoken";

export class LoginService {
  static createAccessToken = (user: IUser): string => {
    return jwt.sign(this.#createJwtPayload(user), config.jwt.secret, {
      expiresIn: config.jwt.expiration,
    });
  };

  static #createJwtPayload = (user: IUser): JwtPayload => {
    return {
      user_id: user.id,
    };
  };
}
