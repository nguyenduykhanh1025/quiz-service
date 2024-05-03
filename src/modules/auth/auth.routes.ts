import { Router } from "express";
import login from './login/login.routes';
import signup from './signup/signup.routes';
import refreshToken from './refresh-token/refresh-token.routes';

const router = Router();

router.use("/login", login);
router.use("/signup", signup);
router.use("/refresh-token", refreshToken);

export default router;