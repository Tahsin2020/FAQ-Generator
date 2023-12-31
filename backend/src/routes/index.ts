import { Router } from "express";
import userRoutes from "./user-routes.js";
import pageRoutes from "./page-routes.js";
// I have to write my routes here.

const appRouter = Router();

appRouter.use("/user", userRoutes);
appRouter.use("/page", pageRoutes);

export default appRouter;
