import { Router } from "express";
import questionRoutes from "./question-routes.js";
import {
  addPage,
  getPages,
  deletePage,
} from "../controllers/page-controllers.js";

const pageRoutes = Router();

pageRoutes.get("/:username/", getPages);
pageRoutes.post("/add/:username/", addPage);
pageRoutes.post("/delete/:username/", deletePage);

pageRoutes.use("/question", questionRoutes);

export default pageRoutes;
