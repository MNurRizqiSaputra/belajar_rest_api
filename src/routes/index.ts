import { Application, Router } from "express";
import { HealthRouter } from "./health";
import { ProductRouter } from "./product";

const _routes: Array<[string, Router]> = [
    [ "/health", HealthRouter ],
    [ "/product", ProductRouter ]
]

// export routes yang mengarah ke src\index.ts
// memanggil semua route yang berada di const _routes
export const routes = (app: Application) => {
    _routes.forEach((route) => {
        const [url, router] = route
        app.use(url, router)
    })
}