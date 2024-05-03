import { Router } from "express";
import controller from "./refresh-token.controller";
import { asyncHandler, validationRequest } from "@quiz/core/middleware";
import { RefreshTokenDto } from "./refresh-token.request";

const router = Router();

router.post(
  "",
  validationRequest(RefreshTokenDto),
  asyncHandler(controller.create)
);

export default router;
