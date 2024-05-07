import { Response } from "express";
import { FolderRequest } from "./folder.request";
import Folder, { IFolder } from "./fodler.model";

class FolderController {
  static create = async (req: FolderRequest, res: Response) => {
    const folderPayload = req.body;
    const savedFolder = await Folder.create(folderPayload);
    res.send(savedFolder);
  };
}

export default FolderController;
