import 'dotenv/config' // Mengimpor 'dotenv/config' agar variabel dari file .env bisa dibaca dalam aplikasi.

// Membuat objek CONFIG yang berisi URL database yang diambil dari variabel lingkungan (process.env.db).
const CONFIG = {
    db: process.env.db // Mengakses variabel 'db' dari file .env.
}

// Mengekspor objek CONFIG agar bisa digunakan di file lain.
export default CONFIG
