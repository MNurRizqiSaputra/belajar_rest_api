import { Router, Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";

export const HealthRouter: Router = Router(); // inisialisasi router yang mengarah ke src\routes\index.ts

// http://localhost:4000/health
HealthRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
    logger.info("Health check success");
    res.status(200).send( {status: "200", data: "server is running"} );
})