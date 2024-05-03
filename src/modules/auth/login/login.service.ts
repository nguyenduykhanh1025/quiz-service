import config from "@quiz/core/config";
import { IUser } from "@quiz/modules/user/user.model";
import jwt from 'jsonwebtoken';

export class LoginService {
  static createRefreshToken = (user: IUser) => {
    return jwt.sign({ id: user.id }, config.jwt.secret, {
        expiresIn: config.jwt.expiration,
      });
  }
}
