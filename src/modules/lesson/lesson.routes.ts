import { asyncHandler, validationRequest } from "@quiz/core/middleware";
import { authentication } from "@quiz/core/middleware/authentication.middleware";
import { Router } from "express";
import controller from "./lesson.controller";
import { LessonCreateRequest, LessonUpdateRequest } from "./request";

const router = Router();

router.get("", authentication, asyncHandler(controller.all));

router.get("/:id", authentication, asyncHandler(controller.get));

router.post(
  "",
  authentication,
  validationRequest(LessonCreateRequest),
  asyncHandler(controller.create)
);

router.put(
  "",
  authentication,
  validationRequest(LessonUpdateRequest),
  asyncHandler(controller.update)
);

router.delete("/:id", authentication, asyncHandler(controller.delete));

export default router;
