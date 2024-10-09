import { Router } from "express"; // Mengimpor tipe Router dari express
import { createProduct, getProduct } from "../controllers/product.controller"; // Mengimpor controller untuk menangani pembuatan dan pengambilan produk

export const ProductRouter: Router = Router(); // Inisialisasi router yang akan mengarah ke src\routes\index.ts

// Mendefinisikan route GET untuk mengambil semua produk
ProductRouter.get("/", getProduct); // Ketika URL "/product" dipanggil, fungsi getProduct akan dijalankan

// Mendefinisikan route GET untuk mengambil produk berdasarkan nama
ProductRouter.get('/:name', getProduct); // Ketika URL "/product/:name" dipanggil, fungsi getProduct akan dijalankan dan mencari produk berdasarkan nama

// Mendefinisikan route POST untuk membuat produk baru
ProductRouter.post("/", createProduct); // Ketika URL "/product" dipanggil dengan metode POST, fungsi createProduct akan dijalankan untuk menambahkan produk baru
