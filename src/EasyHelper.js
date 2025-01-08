// EasyHelper.js

const EasyHelper = {
    /**
     * Memilih elemen DOM dengan mudah
     * @param {string} selector - Selector CSS elemen
     * @returns {HTMLElement | null} - Elemen yang dipilih
     */
    select(selector) {
      return document.querySelector(selector);
    },
  
    /**
     * Mengubah teks elemen DOM
     * @param {string} selector - Selector elemen
     * @param {string} text - Teks baru
     */
    setText(selector, text) {
      const element = this.select(selector);
      if (element) element.textContent = text;
    },
  
    /**
     * Format angka dengan pemisah ribuan
     * @param {number} num - Angka yang akan diformat
     * @returns {string} - Angka yang diformat
     */
    formatNumber(num) {
      return num.toLocaleString('id-ID');
    },
  
    /**
     * Mengecek apakah sebuah nilai kosong
     * @param {any} value - Nilai yang dicek
     * @returns {boolean} - True jika kosong
     */
    isEmpty(value) {
      return (
        value === null ||
        value === undefined ||
        (typeof value === 'string' && value.trim() === '') ||
        (Array.isArray(value) && value.length === 0)
      );
    },
  
    /**
     * Mengonversi waktu (milidetik) ke format jam:menit:detik
     * @param {number} ms - Waktu dalam milidetik
     * @returns {string} - Format waktu
     */
    formatTime(ms) {
      const seconds = Math.floor(ms / 1000) % 60;
      const minutes = Math.floor(ms / (1000 * 60)) % 60;
      const hours = Math.floor(ms / (1000 * 60 * 60));
      return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    },
  
    /**
     * Menambahkan event listener dengan mudah
     * @param {string} selector - Selector elemen
     * @param {string} event - Nama event (contoh: 'click', 'input')
     * @param {Function} callback - Fungsi callback
     */
    on(selector, event, callback) {
      const element = this.select(selector);
      if (element) element.addEventListener(event, callback);
    },
  
    /**
     * Hitung rata-rata dari array angka
     * @param {number[]} numbers - Array angka
     * @returns {number} - Rata-rata
     */
    average(numbers) {
      if (!Array.isArray(numbers) || numbers.length === 0) return 0;
      const total = numbers.reduce((sum, num) => sum + num, 0);
      return total / numbers.length;
    },
  
    /**
     * Validasi email sederhana
     * @param {string} email - Email yang divalidasi
     * @returns {boolean} - True jika valid
     */
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
  
    /**
     * Mengacak array
     * @param {Array} array - Array yang akan diacak
     * @returns {Array} - Array yang sudah diacak
     */
    shuffle(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    },
  
    /**
     * Menghapus duplikat dari array
     * @param {Array} array - Array input
     * @returns {Array} - Array tanpa duplikat
     */
    unique(array) {
        return [...new Set(array)];
    },
  
    /**
     * Menunda eksekusi (Promise-based)
     * @param {number} ms - Waktu tunda dalam milidetik
     * @returns {Promise}
     */
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
  
    /**
     * Mengambil data dari localStorage dengan expiry
     * @param {string} key - Kunci localStorage
     * @returns {any} - Data yang tersimpan
     */
    getStorageItem(key) {
        const item = localStorage.getItem(key);
        if (!item) return null;
        
        const { value, expiry } = JSON.parse(item);
        if (expiry && Date.now() > expiry) {
            localStorage.removeItem(key);
            return null;
        }
        return value;
    },
  
    /**
     * Menyimpan data ke localStorage dengan expiry
     * @param {string} key - Kunci localStorage
     * @param {any} value - Nilai yang akan disimpan
     * @param {number} expiryHours - Waktu kedaluwarsa dalam jam
     */
    setStorageItem(key, value, expiryHours = 24) {
        const item = {
            value: value,
            expiry: Date.now() + (expiryHours * 60 * 60 * 1000)
        };
        localStorage.setItem(key, JSON.stringify(item));
    },
  
    /**
     * Membuat deep clone dari objek
     * @param {Object} obj - Objek yang akan di-clone
     * @returns {Object} - Hasil clone
     */
    deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    },
  
    /**
     * Memformat currency
     * @param {number} amount - Jumlah uang
     * @param {string} currency - Kode mata uang (default: IDR)
     * @returns {string} - Format currency
     */
    formatCurrency(amount, currency = 'IDR') {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: currency
        }).format(amount);
    },
  
    /**
     * Mengambil parameter dari URL
     * @param {string} param - Nama parameter
     * @returns {string|null} - Nilai parameter
     */
    getUrlParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    },
  
    /**
     * Memformat tanggal ke format lokal Indonesia
     * @param {Date|string} date - Objek Date atau string tanggal
     * @returns {string} - Tanggal terformat
     */
    formatDate(date) {
        const d = new Date(date);
        return d.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    },
  
    /**
     * Memvalidasi password (min 8 karakter, huruf besar, huruf kecil, angka)
     * @param {string} password - Password yang akan divalidasi
     * @returns {boolean} - True jika valid
     */
    isStrongPassword(password) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
    },
  
    /**
     * Menghasilkan string random
     * @param {number} length - Panjang string yang diinginkan
     * @param {string} type - 'alphanumeric', 'numeric', 'alpha'
     * @returns {string} - Random string
     */
    generateRandomString(length = 8, type = 'alphanumeric') {
        let chars = '';
        switch (type) {
            case 'numeric':
                chars = '0123456789';
                break;
            case 'alpha':
                chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                break;
            default:
                chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        return Array.from(crypto.getRandomValues(new Uint32Array(length)))
            .map(x => chars[x % chars.length])
            .join('');
    },
  
    /**
     * Memformat ukuran file ke bentuk yang mudah dibaca
     * @param {number} bytes - Ukuran dalam bytes
     * @returns {string} - Format yang mudah dibaca
     */
    formatFileSize(bytes) {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) return '0 Byte';
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    },
  
    /**
     * Menghitung waktu yang telah berlalu
     * @param {Date|string} date - Tanggal yang akan dihitung
     * @returns {string} - Waktu yang telah berlalu dalam format yang mudah dibaca
     */
    timeAgo(date) {
        const seconds = Math.floor((new Date() - new Date(date)) / 1000);
        const intervals = {
            tahun: 31536000,
            bulan: 2592000,
            minggu: 604800,
            hari: 86400,
            jam: 3600,
            menit: 60
        };
        
        for (let [unit, secondsInUnit] of Object.entries(intervals)) {
            const interval = Math.floor(seconds / secondsInUnit);
            if (interval >= 1) {
                return `${interval} ${unit} yang lalu`;
            }
        }
        return 'Baru saja';
    },
  
    /**
     * Memotong teks dengan elipsis
     * @param {string} text - Teks yang akan dipotong
     * @param {number} length - Panjang maksimal
     * @returns {string} - Teks yang sudah dipotong
     */
    truncateText(text, length = 100) {
        return text.length > length ? text.substring(0, length) + '...' : text;
    },
  
    /**
     * Mengubah objek menjadi query string
     * @param {Object} params - Objek parameter
     * @returns {string} - Query string
     */
    toQueryString(params) {
        return Object.keys(params)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
            .join('&');
    },
  
    /**
     * Debounce function untuk membatasi pemanggilan fungsi
     * @param {Function} func - Fungsi yang akan di-debounce
     * @param {number} wait - Waktu tunggu dalam milidetik
     * @returns {Function} - Fungsi yang sudah di-debounce
     */
    debounce(func, wait = 300) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
  
    /**
     * Mengambil cookie berdasarkan nama
     * @param {string} name - Nama cookie
     * @returns {string|null} - Nilai cookie
     */
    getCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? decodeURIComponent(match[2]) : null;
    },
  
    /**
     * Menyimpan cookie
     * @param {string} name - Nama cookie
     * @param {string} value - Nilai cookie
     * @param {number} days - Masa berlaku dalam hari
     */
    setCookie(name, value, days = 7) {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/`;
    }
};
  
  // Export untuk digunakan di Node.js atau browser
  if (typeof module !== 'undefined') {
    module.exports = EasyHelper;
  } else {
    window.EasyHelper = EasyHelper;
  }
  