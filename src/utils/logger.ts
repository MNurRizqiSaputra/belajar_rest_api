import pino from "pino"; // Mengimpor pino, library logging yang cepat dan efisien
import pretty from "pino-pretty"; // Mengimpor pino-pretty untuk memperindah tampilan log di konsol
import moment from "moment"; // Mengimpor moment untuk memformat timestamp

// Mengonfigurasi logger menggunakan pino
export const logger = pino(
    {
        base: {
            pid: false // Menonaktifkan pencatatan pid (process ID) agar tidak ditampilkan dalam log
        },
        // Menambahkan timestamp ke dalam log menggunakan moment untuk format waktu yang lebih jelas
        timestamp: () => `,"time":"${moment().format()}"`,
    },
    pretty() // Menggunakan pino-pretty untuk membuat output log lebih mudah dibaca di konsol
);
