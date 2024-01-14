import { Router } from "express";
import { getPageSetUsername } from "../controllers/pageset-controllers.js";
import pageRoutes from "./page-routes.js";

const pageSetRoutes = Router();

pageSetRoutes.get("/:username/", getPageSetUsername);

pageSetRoutes.use("/page", pageRoutes);

export default pageSetRoutes;
