import {
  withCreatedByAndUpdatedBy,
  withUpdatedBy,
} from "@quiz/core/helpers/abstraction-schema.helper";
import Folder, { FOLDER_COLLECTION_NAME, IFolder } from "./folder.model";
import { NotFoundException } from "@quiz/core/exceptions";
import { UpdateWriteOpResult } from "mongoose";

export class FolderService {
  static async create(folder: IFolder, token: string): Promise<IFolder> {
    withCreatedByAndUpdatedBy(folder, token);
    return await Folder.create(folder);
  }

  static async update(folder: IFolder, token: string): Promise<IFolder> {
    const { id } = folder;
    withUpdatedBy(folder, token);

    const savedFolder = await Folder.findByIdAndUpdate(id, folder);
    if (!savedFolder) {
      throw new NotFoundException(FOLDER_COLLECTION_NAME, id);
    }

    return savedFolder;
  }

  static findById = async (id: string): Promise<IFolder> => {
    const folder = await Folder.findById(id).lean();
    if (!folder) {
      throw new NotFoundException(FOLDER_COLLECTION_NAME, id);
    }

    return folder;
  };
}
