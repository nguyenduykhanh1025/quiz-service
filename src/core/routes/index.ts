import { Router } from "express";

import auth from "../../modules/auth/auth.routes";
import folder from "../../modules/folder/folder.routes";
import lesson from "../../modules/lesson/lesson.routes";

const routes = Router();

routes.use("/auth", auth);
routes.use("/folders", folder);
routes.use("/lessons", lesson);

export default routes;
