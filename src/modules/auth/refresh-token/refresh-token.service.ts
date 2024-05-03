import config from "@quiz/core/config";
import { IUser } from "@quiz/modules/user/user.model";
import { v4 as uuidv4 } from "uuid";
import RefreshToken, { IRefreshToken } from './refresh-token.model';

export class RefreshTokenService {
  static create = async (user: IUser) => {
    const expiredAt = new Date();
    expiredAt.setSeconds(expiredAt.getSeconds() + config.jwt.refreshExpiration);

    const token = uuidv4();

    await RefreshToken.create({
      token: token,
      user: user,
      expiry: expiredAt.getTime(),
    });

    return token;
  };

  static isExpired = (refreshToken: IRefreshToken) => {
    return refreshToken.expiry.getTime() < new Date().getTime();
  }
}
