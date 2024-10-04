import { Router, Request, Response, NextFunction } from "express";

export const ProductRouter: Router = Router(); // inisialisasi router yang mengarah ke src\routes\index.ts

// http://localhost:4000/product
ProductRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send( {status: true, statusCode: 200, data: [{name: "Laptop", price: 100000}]} );
})
