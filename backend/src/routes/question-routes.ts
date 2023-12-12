import { Router } from "express";
import { getQuestions, modifyQuestions } from "../controllers/question-controllers.js";

const questionRoutes = Router();

questionRoutes.post("/", getQuestions);
questionRoutes.post("/modify", modifyQuestions);

export default questionRoutes;
