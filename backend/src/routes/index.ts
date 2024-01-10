import { Router } from "express";
import userRoutes from "./user-routes.js";
import pagesetRoutes from "./pageset-routes.js";
// I have to write my routes here.

const appRouter = Router();

appRouter.use("/user", userRoutes);
appRouter.use("/pageset", pagesetRoutes);

export default appRouter;
