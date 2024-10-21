import { Router } from "express"; // Mengimpor tipe Router dari express
import { createProduct, getProduct, updateProduct } from "../controllers/product.controller"; // Mengimpor controller untuk menangani pembuatan dan pengambilan produk

export const ProductRouter: Router = Router(); // Inisialisasi router yang akan mengarah ke src\routes\index.ts

// Mendefinisikan route GET untuk mengambil semua produk
ProductRouter.get("/", getProduct); // Ketika URL "/product" dipanggil, fungsi getProduct akan dijalankan

// Mendefinisikan route GET untuk mengambil produk berdasarkan ID
ProductRouter.get('/:id', getProduct); // Ketika URL "/product/:product_id" dipanggil, fungsi getProduct akan dijalankan dan mencari produk berdasarkan ID

// Mendefinisikan route POST untuk membuat produk baru
ProductRouter.post("/", createProduct); // Ketika URL "/product" dipanggil dengan metode POST, fungsi createProduct akan dijalankan untuk menambahkan produk baru

// Mendefinisikan route PUT untuk mengupdate produk
ProductRouter.put("/:id", updateProduct); // Ketika URL "/product/:product_id" dipanggil dengan metode PUT, fungsi updateProduct akan dijalankan untuk mengupdate produk