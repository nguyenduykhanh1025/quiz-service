import { Bcrypt } from "@quiz/core/constants";
import { SignupDto } from "./sighup.request";
import bcrypt from "bcrypt";
import User from "@quiz/modules/user/user.model";

export class SignupService {
  static signup = async (signupData: SignupDto) => {
    const { password } = signupData;
    const encryptedPassword = await bcrypt.hash(password, Bcrypt.SALT_ROUND);

    const user = new User({
      ...signupData,
      password: encryptedPassword,
    });

    return await user.save();
  };
}
