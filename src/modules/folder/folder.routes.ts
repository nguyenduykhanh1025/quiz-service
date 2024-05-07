import { Router } from "express";
import controller from "./folder.controller";
import { asyncHandler, validationRequest } from "@quiz/core/middleware";
import { FolderDto } from "./folder.request";
import { authentication } from "@quiz/core/middleware/authentication.middleware";

const router = Router();

router.post(
  "",
  authentication,
  validationRequest(FolderDto),
  asyncHandler(controller.create)
);

export default router;
