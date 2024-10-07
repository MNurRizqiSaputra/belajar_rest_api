import express, { Application } from "express"; // Mengimpor express dan tipe Application dari express
import { routes } from "./routes"; // Mengimpor rute-rute aplikasi dari file routes
import { logger } from "./utils/logger"; // Mengimpor logger untuk logging
import bodyParser from "body-parser"; // Mengimpor body-parser untuk mem-parsing body request
import cors from "cors"; // Mengimpor cors untuk menangani permintaan lintas asal (cross-origin)

const app: Application = express(); // Membuat instance aplikasi express
const port: Number = 4000; // Mendefinisikan port server yang akan digunakan

// Middleware untuk mem-parsing body request dengan format URL-encoded dan JSON
app.use(bodyParser.urlencoded({ extended: false })); // Parsing body request dengan URL-encoded (extended: false untuk query string sederhana)
app.use(bodyParser.json()); // Parsing body request dengan format JSON

// Middleware untuk menangani akses CORS (Cross-Origin Resource Sharing)
app.use(cors()); // Mengaktifkan semua akses CORS
app.use((req, res, next) => { 
    // Mengatur header respons untuk mengizinkan akses dari semua domain dan semua metode
    res.header("Access-Control-Allow-Origin", "*"); // Izinkan semua asal
    res.header("Access-Control-Allow-Methods", "*"); // Izinkan semua metode HTTP (GET, POST, dll.)
    res.header("Access-Control-Allow-Headers", "*"); // Izinkan semua jenis header
    next(); // Lanjutkan ke middleware berikutnya
})

// Mendaftarkan semua route aplikasi
routes(app); // Menjalankan fungsi routes untuk mengatur rute-rute aplikasi

// Memulai server dan mendengarkan pada port yang telah ditentukan
app.listen(port, () => {
    logger.info(`Server is running at http://localhost:${port}`); // Menampilkan log bahwa server berjalan pada URL tertentu
})
