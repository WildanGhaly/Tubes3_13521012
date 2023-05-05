# ChatHaidar
## Tugas Besar 3 IF2211 Strategi Algoritma

https://chat-haidar.vercel.app/

## KMP (Knuth-Morris-Pratt) Algorithm

Algoritma KMP adalah sebuah algoritma pencocokan pola yang digunakan untuk mencari kemunculan suatu pola tertentu dalam sebuah teks. Dalam algoritma KMP, sebuah tabel prefix dibuat terlebih dahulu dari pola yang akan dicari. Tabel prefix ini digunakan untuk mempercepat pencocokan pola pada tahap pencarian.

Pada tahap pencarian, algoritma KMP memindai teks secara bertahap dan membandingkan karakter-karakter yang ada pada teks dengan karakter-karakter pada pola. Pencocokan dimulai dari karakter pertama pada teks dan karakter pertama pada pola. Jika kedua karakter tersebut sama, maka lanjutkan pencocokan ke karakter berikutnya.

Jika terdapat perbedaan antara karakter pada teks dan karakter pada pola pada posisi tertentu, maka tabel prefix akan digunakan untuk menentukan posisi selanjutnya pada pola yang harus dibandingkan dengan karakter pada teks. 
Proses pencarian diulang hingga seluruh teks telah dipindai. Jika selama proses pencarian terdapat satu atau lebih kemunculan pola pada teks, maka algoritma KMP akan mengembalikan posisi-posisi pada teks di mana pola ditemukan.

## BM (Boyer-Moore) Algorithm

Algoritma BM adalah salah satu algoritma pencocokan string yang digunakan untuk mencari sebuah pola dalam sebuah teks. Algoritma ini menggunakan dua tabel yaitu tabel bad-character dan tabel good-suffix untuk mempercepat proses pencarian. Tabel bad-character berisi pergeseran yang harus dilakukan pada pola jika ditemukan sebuah karakter yang tidak cocok pada teks. Sedangkan tabel good-suffix berisi pergeseran yang harus dilakukan pada pola jika sebuah substring dari pola cocok dengan sebuah substring di dalam teks, tetapi karakter di sebelah kiri substring tersebut tidak cocok.

Algoritma BM dimulai dengan membandingkan pola dengan teks dari kanan ke kiri, dan menggunakan tabel bad-character dan good-suffix untuk mengurangi jumlah perbandingan karakter antara pola dan teks. Jika ada karakter pada pola yang tidak cocok dengan karakter pada teks, maka pola akan dipindahkan ke kanan sesuai dengan pergeseran maksimum dari tabel bad-character atau good-suffix. Jika substring dari pola cocok dengan sebuah substring di dalam teks, tetapi karakter di sebelah kiri substring tersebut tidak cocok, maka pola akan dipindahkan ke kanan sesuai dengan pergeseran dari tabel good-suffix.

Pencarian dilakukan hingga pola cocok dengan sebuah substring di dalam teks atau sampai pola tidak dapat dipindahkan lagi. Jika pola cocok, algoritma akan mengembalikan indeks awal pola di dalam teks. Namun, jika pola tidak ditemukan, algoritma akan memberikan hasil pencarian negatif.

Algoritma BM sangat efisien dalam pencarian string dan sering digunakan dalam aplikasi yang memerlukan pencarian string, seperti pencarian teks dalam editor teks atau dalam aplikasi web. Dengan menggunakan tabel bad-character dan good-suffix, algoritma BM dapat mempercepat proses pencarian dan mengurangi jumlah perbandingan karakter antara pola dan teks.

## Penjelasan Aplikasi Web yang dibangun

Aplikasi web yang dibangun menggunakan ReactJS dan NodeJS. Aplikasi yang kami bangun merupakan aplikasi dengan fitur string matching (mirip seperti chatGPT) yang mampu merespon masukkan user dengan jawaban yang diharapkan oleh user berdasarkan database yang dimiliki oleh aplikasi. Aplikasi ini juga mampu tepat merespon jawaban dari masukkan user jika masukkan user memiliki kemiripan 90% ke atas dari yang ada di database serta memberikan sugesti pertanyaan sebenarnya jika kemiripan pertanyaan/masukkan di bawah 90%. Selain itu, aplikasi ini juga memiliki fitur kalkulator, fitur menanyakan hari pada tanggal kapanpun, serta fitur menambah-menghapus pertanyaan-jawaban pada database.

## Technology Used

1. ReactJS
2. NodeJS
3. MySQL2
## Requirement dan Cara Menjalankan Program

Program telah di-deploy pada website https://chat-haidar.vercel.app/ sehingga dapat langsung diuji pada website tersebut. Jika ingin menjalankan program di localhost, langkah-langkah yang dapat diikuti adalah sebagai berikut:
1. Lakukan clone dari https://github.com/WildanGhaly/Tubes3_13521012.git 
2. Buka file Backend/server/db.js dan lakukan konfigurasi koneksi dengan server SQL yang diinginkan. Pastikan untuk mengisi informasi host, port, username, password, dan nama database dengan benar.
3. Buka file Frontend/src/BackendCaller.js dan ubah konstanta menjadi https://localhost:8000 
4. Jalankan perintah npm install di folder Backend/server dan Frontend untuk menginstal semua dependensi yang dibutuhkan.
5. Buka 2 terminal
6. Pada terminal pertama, lakukan cd Backend/server dan jalankan perintah npm run dev untuk menjalankan server backend di localhost:8000.
7. Pada terminal kedua, lakukan cd Frontend dan jalankan perintah npm start untuk menjalankan aplikasi frontend di localhost:3000.
8. Program akan berjalan dan dapat diakses melalui browser dengan membuka alamat http://localhost:3000 
## Authors
Program ini dibuat oleh:
- 13521012 Haikal Ardzi Shofiyyurrohman
- 13521015 Hidayatullah Wildan Ghaly Buchary 
- 13521025 Muhammad Haidar Akita Tresnadi

