import { withCreatedByAndUpdatedBy, withUpdatedBy } from "@quiz/core/helpers";
import Lesson, { ILesson, LESSON_COLLECTION_NAME } from "./lesson.model";
import { UpdateWriteOpResult } from "mongoose";
import { NotFoundException } from "@quiz/core/exceptions";

export class LessonService {
  static async create(lesson: ILesson, token: string): Promise<ILesson> {
    withCreatedByAndUpdatedBy(lesson, token);
    return await Lesson.create(lesson);
  }

  static async update(lesson: ILesson, token: string): Promise<ILesson> {
    const { id } = lesson;
    withUpdatedBy(lesson, token);

    const savedLesson = await Lesson.findByIdAndUpdate(id, lesson);
    if (!savedLesson) {
      throw new NotFoundException(LESSON_COLLECTION_NAME, id);
    }

    return savedLesson;
  }

  static findById = async (id: string): Promise<ILesson> => {
    const folder = await Lesson.findById({ _id: id }).lean();
    if (!folder) {
      throw new NotFoundException(LESSON_COLLECTION_NAME, id);
    }

    return folder;
  };
}
