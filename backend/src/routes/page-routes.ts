import { Router } from "express";
import questionRoutes from "./question-routes.js";
import { addPage, getPages } from "../controllers/page-controllers.js";

const pageRoutes = Router();

pageRoutes.get("/", getPages);
pageRoutes.post("/add", addPage);

pageRoutes.use("/question", questionRoutes);

export default pageRoutes;
