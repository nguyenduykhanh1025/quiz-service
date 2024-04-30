import { Router } from "express";
import login from './login/login.routes';
import signup from './signup/signup.routes';

const router = Router();

router.use("/login", login);
router.use("/signup", signup);

export default router;