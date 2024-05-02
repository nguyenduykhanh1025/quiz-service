import { Router } from "express";
import controller from "./signup.controller";
import { SignupDto } from "./sighup.request";
import { asyncHandler, validationRequest } from "@quiz/core/middleware";

const router = Router();

router.post("", validationRequest(SignupDto), asyncHandler(controller.create));

export default router;
