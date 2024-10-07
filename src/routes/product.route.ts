import { Router, Request, Response, NextFunction } from "express"; // Mengimpor tipe Router, Request, Response, dan NextFunction dari express
import { createProductValidation } from "../validation/product.validation"; // Mengimpor validasi untuk membuat produk
import { logger } from "../utils/logger"; // Mengimpor logger untuk logging

export const ProductRouter: Router = Router(); // Inisialisasi router yang akan mengarah ke src\routes\index.ts

// Route untuk mendapatkan daftar produk
// Akses melalui http://localhost:4000/product
ProductRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
    logger.info("Success get product"); // Logging jika berhasil mendapatkan produk
    // Mengirim respons dengan status 200, berisi informasi produk contoh
    res.status(200).send({ 
        status: true, 
        statusCode: 200, 
        data: [{ name: "Laptop", price: 100000 }] // Contoh data produk
    });
})

// Route untuk menambahkan produk baru melalui metode POST
// Mencoba menambahkan produk baru pada endpoint /product
ProductRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
    // Melakukan validasi terhadap data produk yang dikirim dalam body request
    const { error, value } = createProductValidation(req.body);
    
    // Jika validasi gagal, kirim respons dengan status 422 dan pesan error
    if (error) {
        logger.error('ERR: product - create product', error.details[0].message); // Logging error
        res.status(422).send({ 
            status: false, 
            statusCode: 422, 
            message: error.details[0].message, // Pesan error yang didapat dari validasi
            data: {} 
        });
        return; // Menghentikan eksekusi jika ada error
    }
    
    // Jika berhasil, kirim respons dengan status 200 dan data produk yang berhasil ditambahkan
    logger.info("Success add product"); // Logging keberhasilan menambahkan produk
    res.status(200).send({
        status: true,
        statusCode: 200,
        message: "Success add product",
        data: req.body // Data produk yang ditambahkan
    });
})
