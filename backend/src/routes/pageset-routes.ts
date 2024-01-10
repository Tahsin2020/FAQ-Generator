import { Router } from "express";
import { getPageSet } from "../controllers/pageset-controllers.js";
import pageRoutes from "./page-routes.js";

const pageSetRoutes = Router();

pageSetRoutes.get("/", getPageSet);

pageSetRoutes.use("/page", pageRoutes);

export default pageSetRoutes;
