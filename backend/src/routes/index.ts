import { Router } from "express";
import questionRoutes from "./question-routes.js";
// I have to write my routes here.

const appRouter = Router();

appRouter.use("/question", questionRoutes);

export default appRouter;
