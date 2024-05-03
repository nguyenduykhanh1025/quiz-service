import { Response } from "express";
import { SignupRequest } from "./sighup.request";
import { EmailExistedException } from "./email-existed.exception";
import User from "@quiz/modules/user/user.model";
import { SignupService } from "./signup.service";

class SignupController {
  static create = async (req: SignupRequest, res: Response) => {
    const { email } = req.body;
    
    const isExistedUser = await User.exists({ email });
    if (isExistedUser) {
      throw new EmailExistedException(email);
    }

    const savedUser = await SignupService.signup(req.body);

    res.send(savedUser);
  };
}

export default SignupController;
