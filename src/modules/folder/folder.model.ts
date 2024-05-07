import mongoose from "mongoose";
import { ILesson, LESSON_COLLECTION_NAME } from "../lesson/lesson.model";
import {
  abstractionSchema,
  IAbstractionSchema,
} from "@quiz/core/models/abstraction-schema.model";

export interface IFolder extends IAbstractionSchema {
  title: string;
  lessons: ILesson[];
}

export const FOLDER_COLLECTION_NAME = "Folder";

const FolderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    lessons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: LESSON_COLLECTION_NAME,
      },
    ],
  },
  {
    timestamps: true,
  }
);

FolderSchema.add(abstractionSchema);

const Folder = mongoose.model<IFolder>(FOLDER_COLLECTION_NAME, FolderSchema);

export default Folder;
