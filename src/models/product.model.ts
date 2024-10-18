import mongoose from "mongoose"; // Mengimpor 'mongoose' untuk membuat skema dan model MongoDB.

// Mendefinisikan skema untuk koleksi 'product' di MongoDB.
const productSchema = new mongoose.Schema(
    {
        // 'product_id' adalah field unik yang menyimpan ID produk sebagai string.
        product_id: {
            type: String,
            unique: true // Menentukan bahwa setiap produk harus memiliki ID yang unik.
        },
        // 'name' adalah field untuk menyimpan nama produk sebagai string.
        name: {
            type: String
        },
        // 'price' adalah field untuk menyimpan harga produk sebagai angka.
        price: {
            type: Number
        },
        // 'size' adalah field untuk menyimpan ukuran produk sebagai string (misalnya: S, M, L).
        size: {
            type: String
        }
    },
    {
        // 'timestamps' secara otomatis menambahkan field 'createdAt' dan 'updatedAt' ke dalam dokumen produk.
        timestamps: true
    }
);

// Membuat model 'product' berdasarkan skema 'productSchema' untuk berinteraksi dengan database.
const productModel = mongoose.model('product', productSchema);

// Mengekspor model 'product' agar bisa digunakan di file lain.
export default productModel;
