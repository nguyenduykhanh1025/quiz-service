import { withCreatedByAndUpdatedBy } from "@quiz/core/helpers";
import Lesson, { ILesson } from "./lesson.model";

export class LessonService {
  static async create(lesson: ILesson, token: string): Promise<ILesson> {
    withCreatedByAndUpdatedBy(lesson, token);
    return await Lesson.create(lesson);
  }
}
