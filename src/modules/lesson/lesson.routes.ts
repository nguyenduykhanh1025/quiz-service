import { asyncHandler, validationRequest } from "@quiz/core/middleware";
import { authentication } from "@quiz/core/middleware/authentication.middleware";
import { Router } from "express";
import controller from "./lesson.controller";
import { LessonCreateRequest } from "./lesson-create.request";

const router = Router();

router.post(
  "",
  authentication,
  validationRequest(LessonCreateRequest),
  asyncHandler(controller.create)
);

export default router;
