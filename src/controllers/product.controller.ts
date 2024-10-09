import { Request, Response } from "express"; // Mengimpor tipe Request dan Response dari express
import { createProductValidation } from "../validations/product.validation"; // Mengimpor validasi untuk membuat produk
import { logger } from "../utils/logger"; // Mengimpor logger untuk logging

// Fungsi untuk membuat produk baru
export const createProduct = (req: Request, res: Response) => {
    
    // Melakukan validasi terhadap data yang dikirim melalui body request
    const { error, value } = createProductValidation(req.body);

    // Jika terjadi kesalahan dalam validasi, kirim respon error dengan status 422 (Unprocessable Entity)
    if (error) {
        logger.error('ERR: product - create product', error.details[0].message); // Logging error
        res.status(422).send({
            status: false, // Status validasi gagal
            statusCode: 422, // Kode status 422
            message: error.details[0].message, // Pesan error dari validasi
        });
        return; // Menghentikan eksekusi fungsi
    }

    // Jika berhasil menambahkan produk, kirim respon sukses
    logger.info("Success add product"); // Logging sukses
    res.status(200).send({
        status: true, // Status sukses
        statusCode: 200, // Kode status 200 (OK)
        message: "Success add product", // Pesan sukses
        data: req.body // Mengirim kembali data produk yang ditambahkan
    });
}

// Fungsi untuk mendapatkan produk
export const getProduct = (req: Request, res: Response) => {
    // Data produk yang tersedia
    const products = [
        {
            name: "Laptop", // Nama produk: Laptop
            price: 100000 // Harga: 100000
        },
        {
            name: "Monitor", // Nama produk: Monitor
            price: 50000 // Harga: 50000
        }
    ];

    // Mengambil parameter 'name' dari URL request (jika ada)
    const {
        params: { name }
    } = req;

    // Jika ada nama produk yang dicari
    if (name) {
        // Memfilter produk berdasarkan nama yang sesuai
        const filterProduct = products.filter((product) => {
            if (product.name === name) {
                return product; // Mengembalikan produk jika namanya cocok
            }
        });

        // Jika produk tidak ditemukan, kirim respon error dengan status 404 (Not Found)
        if (filterProduct.length === 0) {
            logger.error("ERR: product - get product"); // Logging error
            res.status(404).send({
                status: false, // Status gagal
                statusCode: 404, // Kode status 404
                message: "Product not found" // Pesan bahwa produk tidak ditemukan
            });
            return; // Menghentikan eksekusi fungsi
        }

        // Jika produk ditemukan, kirim respon sukses dengan data produk yang dicari
        logger.info("Success get product"); // Logging sukses
        res.status(200).send({
            status: true, // Status sukses
            statusCode: 200, // Kode status 200 (OK)
            data: filterProduct[0] // Mengirim produk yang ditemukan
        });
        return;
    }

    // Jika tidak ada nama yang dicari, kirim seluruh produk
    logger.info("Success get product"); // Logging sukses
    res.status(200).send({
        status: true, // Status sukses
        statusCode: 200, // Kode status 200 (OK)
        data: products // Mengirim semua produk
    });
}