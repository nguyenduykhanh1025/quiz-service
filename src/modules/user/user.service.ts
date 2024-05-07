import User, { IUser } from "@quiz/modules/user/user.model";
import { UserNotFoundException } from "./user-not-found.exception";
import { Request } from "express";
import { TokenHelper } from "@quiz/core/helpers/token.helper";

export class UserService {
  static findById = async (id: number): Promise<IUser> => {
    const user = await User.findById(id).lean();
    if (!user) {
      throw new UserNotFoundException(id);
    }

    return user;
  };

  static async getFromReq(req: Request): Promise<IUser> {
    const userId = TokenHelper.getUserIdFromReq(req);
    return await this.findById(userId);
  }
}
