import { Router } from "express";
import {
  getQuestions,
  modifyQuestions,
} from "../controllers/question-controllers.js";
import { verifyToken } from "../utils/token-manager.js";
verifyToken;

const questionRoutes = Router();

questionRoutes.get("/:username/:title/", getQuestions);
questionRoutes.post("/modify/:username/", verifyToken, modifyQuestions);

export default questionRoutes;
