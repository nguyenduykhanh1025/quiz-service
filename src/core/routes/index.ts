import { Router } from "express";

import auth from "../../modules/auth/auth.routes";

const routes = Router();

routes.use("/auth", auth);

export default routes;
