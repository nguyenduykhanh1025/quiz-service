import { Request, Response } from "express";
import User from "../../user/user.model";
import { SignupRequest } from "./sighup.request";

class SignupController {
  static create = async (req: SignupRequest, res: Response) => {
    const { email, fullName, password } = req.body;

    const user = new User({
      email,
      fullName,
      password,
    });

    const savedUser = await user.save();

    res.send(savedUser);
  };
}

export default SignupController;
