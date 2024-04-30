import { Router } from "express";
import { asyncHandler } from "../../core/middleware/async-handler.middleware";
import AuthController from "./auth.controller";

const router = Router();

router.post('/login', asyncHandler(AuthController.login));

export default router;