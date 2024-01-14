import { Router } from "express";
import {
  getQuestions,
  modifyQuestions,
} from "../controllers/question-controllers.js";

const questionRoutes = Router();

questionRoutes.get("/:username/:title/", getQuestions);
questionRoutes.post("/modify/:username/", modifyQuestions);

export default questionRoutes;
