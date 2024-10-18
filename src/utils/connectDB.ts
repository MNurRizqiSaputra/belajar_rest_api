import mongoose from "mongoose"; // Mengimpor 'mongoose' untuk menangani koneksi ke MongoDB.
import CONFIG from "../config/environment"; // Mengimpor konfigurasi dari file environment.ts, termasuk URL database.
import { logger } from "./logger"; // Mengimpor logger untuk mencatat informasi dan kesalahan saat koneksi ke database.

// Menggunakan mongoose untuk menghubungkan ke database MongoDB dengan URL dari CONFIG.db.
mongoose
    .connect(`${CONFIG.db}`) // Menghubungkan ke MongoDB menggunakan URL dari variabel lingkungan.
    .then(() => {
        // Jika koneksi berhasil, catat pesan 'Database connected'.
        logger.info("Database connected to MongoDB");
    })
    .catch((error) => {
        // Jika koneksi gagal, catat pesan 'Database connection error'.
        logger.info("Database connection error to MongoDB");
        // Catat detail error ke dalam log.
        logger.error(error);
        // Hentikan proses aplikasi jika tidak dapat terhubung ke database.
        process.exit(1);
    });
