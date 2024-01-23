import { Router } from "express";
import questionRoutes from "./question-routes.js";
import {
  addPage,
  getPages,
  deletePage,
  modifyPageTitle,
} from "../controllers/page-controllers.js";
import { verifyToken } from "../utils/token-manager.js";

const pageRoutes = Router();

pageRoutes.get("/:username/", getPages);
pageRoutes.post("/add/:username/", verifyToken, addPage);
pageRoutes.post("/delete/:username/", verifyToken, deletePage);
pageRoutes.post("/modifyTitle/:username/", verifyToken, modifyPageTitle);

pageRoutes.use("/question", questionRoutes);

export default pageRoutes;
