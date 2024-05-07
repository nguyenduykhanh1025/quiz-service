import { Response } from "express";
import { RefreshTokenRequest } from "./refresh-token.request";
import RefreshToken from "./refresh-token.model";
import { RefreshTokenNotFoundException } from "./refresh-token-not-found.exception";
import { RefreshTokenService } from "./refresh-token.service";
import { RefreshTokenExpiredException } from "./refresh-token-expried.exception";
import { LoginService } from "../login/login.service";
import { RefreshTokenResponse } from "./refresh-token.response";

class RefreshTokenController {
  static create = async (req: RefreshTokenRequest, res: Response) => {
    const { token } = req.body;
    const refreshToken = await RefreshToken.findOne({ token })
      .populate("user")
      .exec();

    if (!refreshToken) {
      throw new RefreshTokenNotFoundException(token);
    }
    if (RefreshTokenService.isExpired(refreshToken)) {
      throw new RefreshTokenExpiredException(token);
    }

    const { user } = refreshToken;
    const newAccessToken = LoginService.createAccessToken(user);
    const newRefreshToken = await RefreshTokenService.create(user);

    await refreshToken.deleteOne()

    const result: RefreshTokenResponse = {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    };

    res.send(result);
  };
}

export default RefreshTokenController;
