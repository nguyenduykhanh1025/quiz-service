import { Router } from "express";

import auth from "../../modules/auth/auth.routes";
import folder from "../../modules/folder/folder.routes";

const routes = Router();

routes.use("/auth", auth);
routes.use("/folders", folder);

export default routes;
