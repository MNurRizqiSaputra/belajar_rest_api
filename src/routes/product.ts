import { Router, Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";

export const ProductRouter: Router = Router(); // inisialisasi router yang mengarah ke src\routes\index.ts

// http://localhost:4000/product
ProductRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
    logger.info("Success get product");
    res.status(200).send( {status: true, statusCode: 200, data: [{name: "Laptop", price: 100000}]} );
})

// Mencoba menambahkan product/ Post
ProductRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
    logger.info("Success add product");
    res.status(200).send( {status: true, statusCode: 200, data: req.body} );
})