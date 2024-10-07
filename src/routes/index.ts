import { Application, Router } from "express"; // Mengimpor tipe Application dan Router dari express
import { HealthRouter } from "./health.route"; // Mengimpor router untuk endpoint "/health"
import { ProductRouter } from "./product.route"; // Mengimpor router untuk endpoint "/product"

// Membuat array _routes yang berisi pasangan [url, router] untuk setiap rute
const _routes: Array<[string, Router]> = [
    [ "/health", HealthRouter ], // Rute untuk "/health" menggunakan HealthRouter
    [ "/product", ProductRouter ] // Rute untuk "/product" menggunakan ProductRouter
]

// Fungsi untuk mengekspor routes ke file src\index.ts
// Fungsi ini akan memanggil dan mengaktifkan semua rute yang ada di dalam _routes
export const routes = (app: Application) => {
    _routes.forEach((route) => { // Melakukan iterasi pada setiap pasangan [url, router] di _routes
        const [url, router] = route; // Mendestrukturisasi pasangan [url, router]
        app.use(url, router); // Menggunakan rute dengan format app.use(url, router)
    })
}
