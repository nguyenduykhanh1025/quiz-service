import { Router } from "express";
import controller from "./folder.controller";
import { asyncHandler, validationRequest } from "@quiz/core/middleware";
import { FolderCreateRequest } from "./folder-create.request";
import { authentication } from "@quiz/core/middleware/authentication.middleware";
import { FolderUpdateRequest } from "./folder-update.request";

const router = Router();

router.post(
  "",
  authentication,
  validationRequest(FolderCreateRequest),
  asyncHandler(controller.create)
);

router.put(
  "",
  authentication,
  validationRequest(FolderUpdateRequest),
  asyncHandler(controller.update)
);

export default router;
