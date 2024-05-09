import { Response } from "express";
import { FolderCreateRequest } from "./request/folder-create.request";
import { IFolder } from "./folder.model";
import { TokenHelper } from "@quiz/core/helpers/token.helper";
import { FolderService } from "./folder.service";
import { FolderUpdateRequest } from "./request/folder-update.request";
import { success } from "@quiz/core/helpers";
import { BodyRequest } from "@quiz/core/models";

class FolderController {
  static create = async (
    req: BodyRequest<FolderCreateRequest>,
    res: Response
  ) => {
    const folderPayload = req.body as IFolder;
    const token = TokenHelper.getFromReq(req);
    const savedFolder = await FolderService.create(folderPayload, token);

    res.send(success(savedFolder));
  };

  static update = async (
    req: BodyRequest<FolderUpdateRequest>,
    res: Response
  ) => {
    const folderPayload = req.body as IFolder;
    const token = TokenHelper.getFromReq(req);
    await FolderService.update(folderPayload, token);

    res.send(success());
  };
}

export default FolderController;
