import { Request, Response } from "express"; // Mengimpor tipe Request dan Response dari express
import { createProductValidation, updateProductValidation } from "../validations/product.validation"; // Mengimpor validasi untuk membuat produk
import { logger } from "../utils/logger"; // Mengimpor logger untuk logging
import { addProductToDB, getProductById, getProductFromDB, updateProductById } from "../services/product.service"; // Mengimpor fungsi untuk mendapatkan produk dari database MongoDB
import { v4 as uuidv4 } from "uuid"; // Mengimpor fungsi v4 dari uuid untuk menghasilkan ID unik


// Fungsi untuk membuat produk baru
export const createProduct = async (req: Request, res: Response) => {
    req.body.product_id = uuidv4(); // Menggunakan fungsi v4 untuk menghasilkan ID unik
    
    // Melakukan validasi terhadap data yang dikirim melalui body request
    const { error, value } = createProductValidation(req.body);

    // Jika terjadi kesalahan dalam validasi, kirim respon error dengan status 422 (Unprocessable Entity)
    if (error) {
        logger.error("ERR: product - create product", error.details[0].message); // Logging error
        res.status(422).send({
            status: false, // Status validasi gagal
            statusCode: 422, // Kode status 422
            message: error.details[0].message, // Pesan error dari validasi
        });
        return; // Menghentikan eksekusi fungsi
    }

    // Jika validasi sukses
    try {
        await addProductToDB(value); // Menambahkan produk ke database
        // Jika berhasil menambahkan produk, kirim respon sukses
        logger.info("Success add product"); // Logging sukses
        res.status(201).send({
            status: true, // Status sukses
            statusCode: 201, // Kode status 201 (OK)
            message: "Success add product", // Pesan sukses
        });
    } catch (err) { // Jika terjadi kesalahan saat menambahkan produk
        logger.error("ERR: product - create product", error); // Logging error
        res.status(422).send({
            status: false, // Status validasi gagal
            statusCode: 422, // Kode status 422
            message: error// Pesan error dari validasi
        });
        return;
    }
};

// Fungsi untuk mendapatkan produk
export const getProduct = async (req: Request, res: Response) => { // Menggunakan async/await untuk mempercepat proses eksekusi fungsi
    
    // Mengambil parameter 'id' dari request body untuk mendapatkan produk berdasarkan ID
    const {
        params: { id },
    } = req;
    
    // Jika ada id produk yang dicari
    if (id) {
        const product = await getProductById(id) // Mengambil produk berdasarkan ID
        if (product) {
            // Jika produk ditemukan, kirim respon sukses dengan data produk yang dicari
            logger.info("Success get a product"); // Logging sukses
            res.status(200).send({
                status: true, // Status sukses
                statusCode: 200, // Kode status 200 (OK)
                data: product // Mengirim produk yang dicari
            });
            return;
        } else {
            // Jika produk tidak ditemukan, kirim respon error
            logger.error("ERR: product - get product"); // Logging error
            res.status(404).send({
                status: false, // Status error
                statusCode: 404, // Kode status 404 (Not Found)
                message: "Product not found", // Pesan error
                data: {}
            });
        }
    } else {
        const products: any = await getProductFromDB(); // Mengambil semua produk dari database
        // jika berhasil mengambil semua produk, kirim respon sukses
        logger.info("Success get all product"); // Logging sukses
        res.status(200).send({
            status: true, // Status sukses
            statusCode: 200, // Kode status 200 (OK)
            data: products // Mengirim semua produk
        });
    }

};

// Fungsi untuk mengupdate produk
export const updateProduct = async (req: Request, res: Response) => {
    const {
        params: { id },
    } = req;

    // Melakukan validasi terhadap data yang dikirim melalui body request
    const { error, value } = updateProductValidation(req.body);

    // Jika terjadi kesalahan dalam validasi, kirim respon error dengan status 422 (Unprocessable Entity)
    if (error) {
        logger.error("ERR: product - update product", error.details[0].message); // Logging error
        res.status(422).send({
            status: false, // Status validasi gagal
            statusCode: 422, // Kode status 422
            message: error.details[0].message, // Pesan error dari validasi
        });
        return; // Menghentikan eksekusi fungsi
    }

    try {
        await updateProductById(id,value)
        // Jika berhasil mengupdate produk, kirim respon sukses
        logger.info("Success update product"); // Logging sukses
        res.status(200).send({
            status: true, // Status sukses
            statusCode: 200, // Kode status 201 (OK)
            message: "Success update product", // Pesan sukses
        });
    } catch (err) {
    }
}