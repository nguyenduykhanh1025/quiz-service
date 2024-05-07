import User, {
  IUser,
  USER_COLLECTION_NAME,
} from "@quiz/modules/user/user.model";
import { Request } from "express";
import { TokenHelper } from "@quiz/core/helpers/token.helper";
import { NotFoundException } from "@quiz/core/exceptions";

export class UserService {
  static findById = async (id: string): Promise<IUser> => {
    const user = await User.findById(id).lean();
    if (!user) {
      throw new NotFoundException(USER_COLLECTION_NAME, id);
    }

    return user;
  };

  static async getFromReq(req: Request): Promise<IUser> {
    const userId = TokenHelper.getUserIdFromReq(req);
    return await this.findById(userId);
  }
}
