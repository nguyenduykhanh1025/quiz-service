import { Router } from "express";
import LoginController from "./login.controller";
import { asyncHandler } from "@quiz/core/middleware";

const router = Router();

router.post("", asyncHandler(LoginController.create));

export default router;
