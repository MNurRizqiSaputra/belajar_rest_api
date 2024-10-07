import Joi from "joi"; // Mengimpor Joi untuk validasi skema data

// Interface untuk mendefinisikan tipe data produk
interface ProductInterface {
    name: string; // Nama produk harus berupa string
    price: number; // Harga produk harus berupa angka
}

// Fungsi untuk validasi data produk menggunakan Joi
export const createProductValidation = (payload: ProductInterface) => {
    // Definisi skema validasi menggunakan Joi
    const schema = Joi.object({
        name: Joi.string().required(), // Name harus berupa string dan wajib diisi
        price: Joi.number().allow('', null) // Price boleh berupa angka, string kosong, atau null
    });

    // Melakukan validasi payload (data produk) sesuai dengan skema yang sudah didefinisikan
    return schema.validate(payload); // Mengembalikan hasil validasi
}
