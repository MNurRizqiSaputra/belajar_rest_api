### Penjelasan package.json

- **"start"**: Menjalankan TypeScript compiler dalam mode watch, mengawasi perubahan file.
- **"dev"**: Menggunakan nodemon untuk mengawasi perubahan dan otomatis me-restart server saat ada perubahan.
- **"build"**: Melakukan kompilasi TypeScript ke JavaScript tanpa mode watch.
- **"devDependencies"**:
  - `@types/cors`, `@types/express`: Definisi tipe untuk TypeScript terkait cors dan express.
  - `ts-node`: Menjalankan TypeScript secara langsung tanpa perlu kompilasi manual.
  - `typescript`: Compiler untuk TypeScript.
- **"dependencies"**:
  - `body-parser`: Middleware untuk parsing body request di express.
  - `cors`: Middleware untuk menangani Cross-Origin Resource Sharing (CORS).
  - `express`: Framework web untuk Node.js.
  - `joi`: Library untuk validasi data.
  - `moment`: Library untuk manipulasi dan format tanggal/waktu.
  - `nodemon`: Tool yang otomatis me-restart aplikasi saat ada perubahan file.
  - `pino`, `pino-pretty`: Logger yang cepat dan efisien, serta tool untuk memperindah tampilan log.
