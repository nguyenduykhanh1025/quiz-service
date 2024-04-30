import { Router } from "express";
import login from './login/login.routes';

const router = Router();

router.use("/login", login);

export default router;