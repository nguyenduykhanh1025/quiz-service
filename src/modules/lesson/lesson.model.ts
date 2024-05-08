import { abstractionSchema, IAbstractionSchema } from "@quiz/core/models";
import mongoose, { Schema, StringSchemaDefinition } from "mongoose";

export interface ITerm {
  key: string;
  definition: string;
}

export interface ILesson extends IAbstractionSchema {
  title: string;
  description: string;
  school: string;
  subject: string;
  terms: ITerm[];
}

export const LESSON_COLLECTION_NAME = "Lesson";

const LessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    school: {
      type: String,
    },
    subject: {
      type: String,
    },
    terms: [new Schema({ key: String, definition: String })],
  },
  {
    timestamps: true,
  }
);

LessonSchema.add(abstractionSchema);

const Lesson = mongoose.model<ILesson>(LESSON_COLLECTION_NAME, LessonSchema);

export default Lesson;
