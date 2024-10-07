import { Router, Request, Response, NextFunction } from "express"; // Mengimpor tipe Router, Request, Response, dan NextFunction dari express
import { logger } from "../utils/logger"; // Mengimpor logger untuk logging

export const HealthRouter: Router = Router(); // Inisialisasi router yang akan digunakan untuk route kesehatan sistem (health check)

// Route untuk health check pada server
// Akses melalui http://localhost:4000/health
HealthRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
    // Logging jika health check berhasil
    logger.info("Health check success");

    // Mengirim respons dengan status 200, menunjukkan bahwa server berjalan dengan baik
    res.status(200).send({ 
        status: "200", // Status respons
        data: "server is running" // Pesan yang menginformasikan bahwa server berjalan
    });
})
