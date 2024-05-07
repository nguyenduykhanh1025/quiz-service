import mongoose from "mongoose";

export interface ILesson extends mongoose.Document {
  title: string;
}

export const LESSON_COLLECTION_NAME = "Lesson";

const LessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Lesson = mongoose.model<ILesson>(LESSON_COLLECTION_NAME, LessonSchema);

export default Lesson;
