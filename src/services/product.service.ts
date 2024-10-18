import { logger } from "../utils/logger"; // Mengimpor logger untuk mencatat informasi dan kesalahan selama proses mendapatkan data produk.
import productModel from "../models/product.model"; // Mengimpor model produk dari file product.model.ts untuk berinteraksi dengan koleksi produk di MongoDB.

// Fungsi untuk mengambil semua data produk dari database.
export const getProductFromDB = async () => {
    return await productModel
        .find() // Mengambil semua dokumen dari koleksi 'product'.
        .then((data) => {
            // Jika berhasil, kembalikan data produk.
            return data;
        })
        .catch((err) => {
            // Jika terjadi kesalahan, catat pesan error di log.
            logger.info("Database error when get product");
            logger.error(err);
        });
};
