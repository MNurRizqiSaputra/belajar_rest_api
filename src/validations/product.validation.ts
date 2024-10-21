import Joi from "joi"; // Mengimpor Joi untuk validasi skema data
import  ProductType  from "../types/product.type"; // Mengimpor tipe produk dari file product.type.ts. untuk mendefinisikan struktur tipe data produk


// Fungsi untuk validasi pembuatan data produk menggunakan Joi
export const createProductValidation = (payload: ProductType) => {
    // Definisi skema validasi menggunakan Joi
    const schema = Joi.object({
        product_id: Joi.string().required(), // Product ID harus berupa string dan wajib diisi
        name: Joi.string().required(), // Name harus berupa string dan wajib diisi
        price: Joi.number().allow('', null), // Price boleh berupa angka, string kosong, atau null
        size: Joi.string().allow('', null) // Size harus berupa string kosong, atau null
    });

    // Melakukan validasi payload (data produk) sesuai dengan skema yang sudah didefinisikan
    return schema.validate(payload); // Mengembalikan hasil validasi
}

// Fungsi untuk validasi perubahan data produk menggunakan Joi
export const updateProductValidation = (payload: ProductType) => {
    // Definisi skema validasi menggunakan Joi
    const schema = Joi.object({
        name: Joi.string().allow('', null), // Name harus berupa string kosong, atau null
        price: Joi.number().allow('', null), // Price boleh berupa angka, string kosong, atau null
        size: Joi.string().allow('', null) // Size harus berupa string kosong, atau null
    });

    // Melakukan validasi payload (data produk) sesuai dengan skema yang sudah didefinisikan
    return schema.validate(payload); // Mengembalikan hasil validasi
}
