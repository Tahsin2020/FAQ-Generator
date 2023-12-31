import { Router } from "express";
import questionRoutes from "./question-routes.js";
import { addPage, getPages, deletePage } from "../controllers/page-controllers.js";

const pageRoutes = Router();

pageRoutes.get("/", getPages);
pageRoutes.post("/add", addPage);
pageRoutes.post("/delete", deletePage);

pageRoutes.use("/question", questionRoutes);

export default pageRoutes;
