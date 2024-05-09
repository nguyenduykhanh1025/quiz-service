import { withCreatedByAndUpdatedBy, withUpdatedBy } from "@quiz/core/helpers";
import Lesson, { ILesson, LESSON_COLLECTION_NAME } from "./lesson.model";
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

  static async delete(id: string, token: string): Promise<ILesson> {
    const lesson = {
      id: id,
      isDeleted: true,
    } as ILesson;
    withUpdatedBy(lesson, token);

    const savedLesson = await Lesson.findByIdAndUpdate(id, lesson);
    if (!savedLesson) {
      throw new NotFoundException(LESSON_COLLECTION_NAME, id);
    }

    return savedLesson;
  }

  static findById = async (id: string): Promise<ILesson> => {
    const folder = await Lesson.findById(id).lean();
    if (!folder) {
      throw new NotFoundException(LESSON_COLLECTION_NAME, id);
    }

    return folder;
  };

  static findAllAndDeleteIsFalse = async (
    userId: string
  ): Promise<ILesson[]> => {
    const folders = await Lesson.where({
      createdBy: userId,
      isDeleted: false,
    }).lean();

    return folders;
  };
}
