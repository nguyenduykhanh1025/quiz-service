import { Request, Response } from "express";

class AuthController {
  static login = (req: Request, res: Response) => {
    return res.type("json").send({
      alo: "slo",
    });
  };
}
export default AuthController;
