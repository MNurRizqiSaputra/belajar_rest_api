import { Router, Request, Response, NextFunction } from "express";

export const HealthRouter: Router = Router(); // inisialisasi router yang mengarah ke src\routes\index.ts

// http://localhost:4000/health
HealthRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send( {status: "200", data: "server is running"} );
})