# 🌸 Katalog Buket Bunga

Hai! Selamat datang di repositori proyek website pemesanan buket bunga. Website ini dibangun sepenuhnya dari nol menggunakan **Vanilla HTML, CSS, dan JavaScript**.

Fokus utama dari pengembangan proyek ini bukan sekadar membuat katalog yang berfungsi, tetapi juga mengeksplorasi performa web tingkat tinggi. Tanpa bergantung pada _framework_ yang berat, website ini dirancang agar sangat ringan (_lightweight_) dan memuat data dengan cepat.

Secara visual, antarmukanya mengusung gaya minimalis namun tetap _stylish_. Pengalaman pengguna (UX) diperkaya dengan animasi transisi yang _snappy_ dan UI yang dinamis—mengambil sedikit inspirasi dari estetika antarmuka game modern bernuansa ekspresif seperti seri _Persona_.

## ✨ Fitur Utama

- **Render Data Dinamis:** Semua produk dimuat secara dinamis dari satu sumber data utama (`data/produk.json`), membuat manajemen stok dan penambahan produk baru menjadi sangat mudah.
- **Filter Kategori Tanpa Reload:** Pengunjung bisa menyortir buket (Wisuda, Anniversary, Ulang Tahun) secara instan menggunakan manipulasi DOM _vanilla_.
- **Pemesanan via WhatsApp Otomatis:** Formulir pesanan kustom akan memproses input pengguna dan langsung men-generate tautan pesan WhatsApp yang sudah terformat rapi ke nomor admin toko.
- **Komponen Reusable:** Navbar dan footer di-inject menggunakan JavaScript untuk menghindari duplikasi kode berulang di setiap halaman HTML.

## 🛠️ Teknologi yang Digunakan

- **HTML5:** Struktur semantik yang rapi untuk aksesibilitas.
- **CSS3:** Menggunakan CSS Variables (Custom Properties) untuk sistem desain (palet warna dan tipografi) serta animasi murni.
- **Vanilla JavaScript (ES6+):** Logika _fetch_ API, manipulasi DOM, dan perutean data tanpa _library_ eksternal.

## 🚀 Cara Menjalankan Proyek Secara Lokal

Karena proyek ini sepenuhnya statis, kamu bisa menjalankannya dengan sangat mudah:

1. Clone repositori ini ke komputer lokalmu:
   ```bash
   git clone [https://github.com/username-kamu/nama-repo-kamu.git](https://github.com/username-kamu/nama-repo-kamu.git)
   ```
