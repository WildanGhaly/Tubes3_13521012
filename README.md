# Tubes3_13521012

# Cara menjalankan program
Program telah di-deploy pada website https://chat-haidar.vercel.app/ sehingga dapat langsung diuji pada website tersebut. Jika ingin menjalankan program di localhost, langkah-langkah yang dapat diikuti adalah sebagai berikut:
Lakukan clone dari https://github.com/WildanGhaly/Tubes3_13521012.git 
Buka file Backend/server/db.js dan lakukan konfigurasi koneksi dengan server SQL yang diinginkan. Pastikan untuk mengisi informasi host, port, username, password, dan nama database dengan benar.
Buka file Frontend/src/BackendCaller.js dan ubah konstanta menjadi https://localhost:8000 
Jalankan perintah npm install di folder Backend/server dan Frontend untuk menginstal semua dependensi yang dibutuhkan.
Buka 2 terminal
Pada terminal pertama, lakukan cd Backend/server dan jalankan perintah npm run dev untuk menjalankan server backend di localhost:8000.
Pada terminal kedua, lakukan cd Frontend dan jalankan perintah npm start untuk menjalankan aplikasi frontend di localhost:3000.
Program akan berjalan dan dapat diakses melalui browser dengan membuka alamat http://localhost:3000 
