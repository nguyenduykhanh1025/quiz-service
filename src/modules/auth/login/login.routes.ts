import { Router } from "express";
import LoginController from "./login.controller";
import { asyncHandler } from "../../../core/middleware/async-handler.middleware";

const router = Router();

router.post('', asyncHandler(LoginController.create));

export default router;