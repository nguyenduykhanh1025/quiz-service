import { Response } from "express";
import { TokenHelper } from "@quiz/core/helpers/token.helper";
import { success } from "@quiz/core/helpers";
import { BodyRequest } from "@quiz/core/models";
import { LessonCreateRequest } from "./lesson-create.request";
import { ILesson } from "./lesson.model";
import { LessonService } from "./lesson.service";
import { LessonUpdateRequest } from "./lesson-update.request";

class LessonController {
  static create = async (
    req: BodyRequest<LessonCreateRequest>,
    res: Response
  ) => {
    const lessonPayload = req.body as ILesson;
    const token = TokenHelper.getFromReq(req);
    const savedLesson = await LessonService.create(lessonPayload, token);

    res.send(success(savedLesson));
  };

  static update = async (
    req: BodyRequest<LessonUpdateRequest>,
    res: Response
  ) => {
    const folderPayload = req.body as ILesson;
    const token = TokenHelper.getFromReq(req);
    const result = await LessonService.update(folderPayload, token);

    res.send(success(result));
  };
}

export default LessonController;
