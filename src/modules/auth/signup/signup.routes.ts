import { Router } from "express";
import controller from "./signup.controller";
import { asyncHandler } from "../../../core/middleware/async-handler.middleware";
import validationRequestMiddleware from "../../../core/middleware/validation-request.middleware";
import { UserDto } from "./sighup.request";

const router = Router();

router.post('', validationRequestMiddleware(UserDto), asyncHandler(controller.create));

export default router;