import { logger } from "../utils/logger"; // Mengimpor logger untuk mencatat informasi dan kesalahan selama proses mendapatkan data produk.
import productModel from "../models/product.model"; // Mengimpor model produk dari file product.model.ts untuk berinteraksi dengan koleksi produk di MongoDB.
import  ProductType from "../types/product.type"; // Mengimpor tipe produk dari file product.type.ts. untuk mendefinisikan struktur tipe data produk.

// Fungsi untuk menambahkan produk baru ke database MongoDB.
export const addProductToDB = async (payload: ProductType) => { 
    return await productModel.create(payload); // Menyimpan data produk ke dalam koleksi 'product' di MongoDB.
};

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

// Fungsi untuk mendapatkan produk berdasarkan ID
export const getProductById = async (id: string) => {
    return await productModel // Mengambil semua dokumen dari koleksi 'product'
        .findOne( // Mencari dokumen berdasarkan ID produk dengan hasil pencarian 1 dokumen
            { product_id: id } // Menggunakan ID sebagai kriteria pencarian
        )
};

// Fungsi untuk mengupdate data produk
export const updateProductById = async (id: string, payload: ProductType) => {
    const result = await productModel
        .findOneAndUpdate( // Mencari dan memperbarui dokumen berdasarkan ID
            { 
                product_id: id // Menggunakan ID sebagai kriteria pencarian,
            }, 
            {
                $set: payload // Mengubah data produk yang diperbarui
            }
        )
    return result
};

// Fungsi untuk menghapus data produk
export const deleteProductById = async (id: string) => {
    const result = await productModel
        .findOneAndDelete( // Mencari dan menghapus dokumen berdasarkan ID
            { 
                product_id: id // Menggunakan ID sebagai kriteria pencarian
            }
        )
    return result
};
