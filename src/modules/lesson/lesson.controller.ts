import { Request, Response } from "express";
import { TokenHelper } from "@quiz/core/helpers/token.helper";
import { success } from "@quiz/core/helpers";
import { BodyRequest } from "@quiz/core/models";
import { ILesson } from "./lesson.model";
import { LessonService } from "./lesson.service";
import { LessonCreateRequest, LessonUpdateRequest } from "./request";

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

  static delete = async (req: Request, res: Response) => {
    const token = TokenHelper.getFromReq(req);
    // FIXME: try to type-safe this value: req.params.*
    const deletedLesson = LessonService.delete(req.params.id, token);

    res.send(success(deletedLesson));
  };

  static get = async (req: Request, res: Response) => {
    const result = await LessonService.findById(req.params.id);

    res.send(success(result));
  };

  static all = async (req: Request, res: Response) => {
    const userId = TokenHelper.getUserIdFromReq(req);
    const result = await LessonService.findAllAndDeleteIsFalse(userId);

    res.send(success(result));
  };
}

export default LessonController;
