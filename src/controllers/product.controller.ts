import { Request, Response } from "express"; // Mengimpor tipe Request dan Response dari express
import { createProductValidation } from "../validations/product.validation"; // Mengimpor validasi untuk membuat produk
import { logger } from "../utils/logger"; // Mengimpor logger untuk logging
import { getProductFromDB } from "../services/product.service"; // Mengimpor fungsi untuk mendapatkan produk dari database MongoDB

// Interface untuk mendefinisikan tipe data produk
interface ProductType {
    product_id: String; // ID produk
    name: String; // Nama produk
    price: Number; // Harga
    size: String; // Ukuran
}

// Fungsi untuk membuat produk baru
export const createProduct = (req: Request, res: Response) => {
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

    // Jika berhasil menambahkan produk, kirim respon sukses
    logger.info("Success add product"); // Logging sukses
    res.status(200).send({
        status: true, // Status sukses
        statusCode: 200, // Kode status 200 (OK)
        message: "Success add product", // Pesan sukses
        data: req.body, // Mengirim kembali data produk yang ditambahkan
    });
};

// Fungsi untuk mendapatkan produk
export const getProduct = async (req: Request, res: Response) => { // Menggunakan async/await untuk mempercepat proses eksekusi fungsi
    const products: any = await getProductFromDB(); // Mengambil semua produk dari database

    // Mengambil parameter 'name' dari URL request (jika ada)
    const {
        params: { name },
    } = req;

    // Jika ada nama produk yang dicari
    if (name) {
        // Memfilter produk berdasarkan nama yang sesuai yang ditemukan dari database mongoDB
        const filterProduct = products.filter((product: ProductType) => {
            if (product.name === name) {
                return product; // Mengembalikan produk jika namanya cocok
            }
        });

        // Jika produk tidak ditemukan, kirim respon error dengan status 404 (Not Found)
        if (filterProduct.length === 0) {
            logger.error("product not found"); // Logging error
            res.status(404).send({
                status: false, // Status gagal
                statusCode: 404, // Kode status 404
                message: "Product not found", // Pesan bahwa produk tidak ditemukan
            });
            return; // Menghentikan eksekusi fungsi
        }

        // Jika produk ditemukan, kirim respon sukses dengan data produk yang dicari
        logger.info("Success get a product"); // Logging sukses
        res.status(200).send({
            status: true, // Status sukses
            statusCode: 200, // Kode status 200 (OK)
            data: filterProduct[0], // Mengirim produk yang ditemukan
        });
        return;
    }

    // Jika tidak ada nama yang dicari, kirim seluruh produk
    logger.info("Success get all product"); // Logging sukses
    res.status(200).send({
        status: true, // Status sukses
        statusCode: 200, // Kode status 200 (OK)
        data: products, // Mengirim semua produk
    });
};
