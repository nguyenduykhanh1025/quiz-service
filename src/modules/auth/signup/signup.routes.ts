import { Router } from "express";
import controller from "./signup.controller";
import { asyncHandler } from "../../../core/middleware/async-handler.middleware";

const router = Router();

router.post('', asyncHandler(controller.create));

export default router;