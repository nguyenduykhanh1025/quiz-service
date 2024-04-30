import { Request, Response } from "express";

class LoginController {
  static create = (req: Request, res: Response) => {
    res.send({
      alo: "slo",
    });
  };
}

export default LoginController;
