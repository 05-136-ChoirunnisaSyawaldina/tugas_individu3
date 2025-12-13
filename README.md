# Elegant Product Review Analyzer (AI-Powered)

Aplikasi web elegan yang memanfaatkan kecerdasan buatan (AI) untuk menganalisis ulasan produk secara otomatis. Dibuat dengan antarmuka yang simpel, modern, dan cantik untuk pengalaman pengguna yang intuitif.

---

## ✨ Fitur Utama

Aplikasi ini dirancang untuk memberikan wawasan cepat dari teks ulasan produk:

1.  **Analisis Sentimen Otomatis**: Mendeteksi apakah ulasan bersifat **Positif**, **Negatif**, atau **Netral** menggunakan model AI yang canggih (Hugging Face).
2.  **Ekstraksi Poin Penting**: Menggunakan Google Gemini AI untuk merangkum 3-5 poin utama dari ulasan yang panjang, sehingga Anda tidak perlu membaca semuanya.
3.  **Dukungan Multi-Bahasa**: Secara cerdas menangani ulasan dalam Bahasa Indonesia maupun Inggris.
4.  **Riwayat Analisis**: Menyimpan dan menampilkan daftar analisis yang baru saja Anda lakukan.
5.  **Antarmuka Elegan**: Desain UI yang simpel, bersih, dengan tipografi yang indah dan gradasi warna yang menenangkan, tanpa ikon yang berlebihan.

---

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun menggunakan teknologi web modern dan layanan AI terdepan:

| Kategori | Teknologi |
| :--- | :--- |
| **Frontend** | React.js, CSS3 (Custom Elegant Design) |
| **Backend** | Python, Flask |
| **Database** | PostgreSQL, SQLAlchemy ORM |
| **AI Service 1** | Hugging Face (Sentiment Analysis) |
| **AI Service 2** | Google Gemini (Key Points Extraction) |
| **Tools** | Git, npm, pip |

---

## 🚀 Cara Menjalankan Proyek (Instalasi)

Ikuti langkah-langkah ini untuk menjalankan aplikasi di komputer lokal Anda.

### Prasyarat
Pastikan Anda sudah menginstal:
* [Python](https://www.python.org/) (v3.8+)
* [Node.js](https://nodejs.org/) (v14+)
* [PostgreSQL](https://www.postgresql.org/)

### Langkah 1: Persiapan Backend

1.  Masuk ke folder backend:
    ```bash
    cd backend
    ```
2.  Buat dan aktifkan virtual environment:
    ```bash
    python -m venv venv
    # Windows:
    venv\Scripts\activate
    # Mac/Linux:
    source venv/bin/activate
    ```
3.  Instal dependensi Python:
    ```bash
    pip install -r requirements.txt
    ```
4.  Buat file `.env` di dalam folder `backend` dan isi konfigurasi berikut (ganti dengan kredensial Anda):
    ```env
    # Database Configuration
    DATABASE_URL=postgresql://user_anda:password_anda@localhost:5432/nama_database_anda
    
    # AI API Keys (Dapatkan dari website masing-masing layanan)
    HUGGINGFACE_API_KEY=your_huggingface_api_token
    GEMINI_API_KEY=your_google_gemini_api_key
    
    # Flask Security
    SECRET_KEY=kunci_rahasia_acak_bebas
    FLASK_DEBUG=True
    ```
5.  Jalankan server backend:
    ```bash
    python app.py
    ```
    *Server akan berjalan di `http://localhost:5001`*

### Langkah 2: Persiapan Frontend

1.  Buka terminal baru dan masuk ke folder frontend:
    ```bash
    cd frontend
    ```
2.  Instal dependensi Node.js:
    ```bash
    npm install
    ```
3.  Jalankan aplikasi frontend:
    ```bash
    npm start
    ```
    *Aplikasi akan terbuka secara otomatis di browser Anda di `http://localhost:3000`*

---

## 📝 Cara Penggunaan

1.  Buka aplikasi di browser.
2.  Masukkan **Nama Produk** yang diulas.
3.  Tempelkan **Teks Ulasan** ke dalam kotak teks yang tersedia.
4.  Klik tombol **"Analyze Review"**.
5.  Tunggu beberapa saat, dan hasil analisis (Sentimen dan Poin Penting) akan muncul di bawah formulir.
6.  Riwayat analisis Anda akan muncul di panel sebelah kanan.

---

**Dibuat dengan 💖 dan kecerdasan buatan.**