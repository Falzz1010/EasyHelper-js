# EasyHelper.js

EasyHelper.js adalah library JavaScript ringan yang menyediakan kumpulan fungsi utilitas untuk mempermudah pengembangan web. Library ini dirancang untuk membantu developer dalam menangani tugas-tugas umum dengan cara yang lebih sederhana dan efisien.

## 🚀 Instalasi

### Via NPM

bash
npm install easyhelper


### Via CDN

html
<script src="path/to/EasyHelper.js"></script>


## 🎯 Fitur Utama

- Manipulasi DOM yang mudah
- Format angka dan mata uang
- Manajemen localStorage dengan expiry
- Validasi (email, password)
- Manipulasi array dan objek
- Utilitas string dan tanggal
- Cookie management
- Dan banyak lagi!

## 📖 Penggunaan

### Manipulasi DOM

javascript
// Memilih elemen
const element = EasyHelper.select('#myElement');
// Mengubah teks
EasyHelper.setText('#myElement', 'Hello World');
// Menambah event listener
EasyHelper.on('#myButton', 'click', () => {
alert('Button clicked!');
});


### Format dan Validasi

javascript
// Format angka
EasyHelper.formatNumber(1000000); // Output: "1.000.000"
// Format mata uang
EasyHelper.formatCurrency(50000); // Output: "Rp 50.000"
// Validasi email
EasyHelper.isValidEmail('user@example.com'); // Output: true
// Validasi password
EasyHelper.isStrongPassword('Pass123'); // Output: false


### Manipulasi Array

javascript
// Mengacak array
const array = [1, 2, 3, 4, 5];
EasyHelper.shuffle(array);
// Menghapus duplikat
const uniqueArray = EasyHelper.unique([1, 1, 2, 2, 3]);


### Storage dan Cookie

javascript
// Menyimpan data dengan expiry
EasyHelper.setStorageItem('user', { name: 'John' }, 24); // expired dalam 24 jam
// Mengambil data
const userData = EasyHelper.getStorageItem('user');
// Mengatur cookie
EasyHelper.setCookie('theme', 'dark', 7); // expired dalam 7 hari
// Mengambil cookie
const theme = EasyHelper.getCookie('theme');


### Utilitas Waktu dan Tanggal

javascript
// Format waktu
EasyHelper.formatTime(3600000); // Output: "01:00:00"
// Format tanggal
EasyHelper.formatDate('2024-03-20'); // Output: "20 Maret 2024"
// Waktu yang telah berlalu
EasyHelper.timeAgo('2024-03-19'); // Output: "1 hari yang lalu"



## 🤝 Kontribusi

Kontribusi selalu diterima! Silakan buat pull request atau laporkan issues.

## 📄 Lisensi

MIT License - silakan gunakan dengan bebas untuk proyek personal maupun komersial.

## ⚠️ Catatan Penting

- Library ini menggunakan fitur ES6+
- Beberapa fungsi memerlukan environment browser (DOM API)
- Pastikan untuk menangani error ketika menggunakan fungsi-fungsi tertentu

