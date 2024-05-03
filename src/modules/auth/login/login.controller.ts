import { Response } from "express";
import { LoginRequest } from "./login.request";
import User from "@quiz/modules/user/user.model";
import { EmailNotFoundException } from "./email-not-found.exception";
import bcrypt from "bcrypt";
import { UnauthorizedException } from "@quiz/core/exceptions";
import jwt from "jsonwebtoken";
import config from "@quiz/core/config";
import { RefreshTokenService } from "../refresh-token/refresh-token.service";
import { LoginResponse } from "./login.response";
import { LoginService } from "./login.service";

class LoginController {
  static create = async (req: LoginRequest, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).exec();
    if (!user) {
      throw new EmailNotFoundException(email);
    }

    this.#passwordValidation(password, user.password);

    const accessToken = LoginService.createRefreshToken(user);
    const refreshToken = await RefreshTokenService.create(user);

    const result: LoginResponse = {
      accessToken,
      refreshToken,
    };

    res.send(result);
  };

  static #passwordValidation(passwordFromReq: string, passwordFromDB: string) {
    const isPasswordValid = bcrypt.compareSync(passwordFromReq, passwordFromDB);

    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }
  }
}

export default LoginController;
