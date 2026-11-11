import { Router } from "express";

export class AppRoutes {

  static get routes(): Router {
    const router = Router();
    const apiRouter = Router();

    // Definir rutas
    //apiRouter.use("/students", StudentRoutes.routes);

    router.use("/api", apiRouter);

    return router;
  }
}