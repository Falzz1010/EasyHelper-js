// Import EasyHelper
const EasyHelper = require('./src/EasyHelper');

// Contoh penggunaan
async function main() {
    // Format angka
    console.log(EasyHelper.formatNumber(1000000)); // Output: 1.000.000

    // Validasi email
    console.log(EasyHelper.isValidEmail('test@example.com')); // Output: true

    // Mengacak array
    const numbers = [1, 2, 3, 4, 5];
    console.log(EasyHelper.shuffle(numbers));

    // Menggunakan delay
    console.log('Mulai');
    await EasyHelper.delay(2000); // Tunggu 2 detik
    console.log('Setelah delay 2 detik');

    // Format currency
    console.log(EasyHelper.formatCurrency(75000)); // Output: Rp 75.000,00

    // Deep clone objek
    const obj = { name: 'John', age: 30, hobbies: ['reading', 'coding'] };
    const cloned = EasyHelper.deepClone(obj);
}

main(); 