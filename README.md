# HematIN App

Website Prediksi Pengeluaran Bulanan dan Algoritma Pemberian Saran untuk Berhemat.

## 📚 Deskripsi
Hematin App membantu pengguna memprediksi pengeluaran bulanan dan memberikan saran untuk berhemat menggunakan algoritma dan model machine learning.

## 📂 Struktur Folder
```
Hematin-App/
├── frontend/           # React Frontend
├── backend-express/    # Express.js REST API + Prisma + Postgre
├── backend-flask/      # Flask Backend untuk Model ML
```

## 🚀 Instalasi dan Menjalankan Project

### 1️⃣ Frontend (React)
```bash
cd frontend
npm install
npm run dev
```
Akses di: http://localhost:5173

### 2️⃣ Backend-Express (Express.js + Prisma)
```bash
cd backend-express
npm install
npx prisma generate
npm start
```
Akses di: http://localhost:3000

### 3️⃣ Backend-Flask (Python Flask)
```bash
cd backend-flask
pip install -r requirements.txt
python app.py
```
Akses di: http://localhost:5000

## 🗄️ Database
- Database dikonfigurasi menggunakan Prisma ORM.
- Pastikan koneksi database sudah disesuaikan di file `.env` (contoh di backend-express).