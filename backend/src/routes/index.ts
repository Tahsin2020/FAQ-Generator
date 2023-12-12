import { Router } from "express";
import pageRoutes from "./page-routes.js";
// I have to write my routes here.

const appRouter = Router();

appRouter.use("/page", pageRoutes);

export default appRouter;
