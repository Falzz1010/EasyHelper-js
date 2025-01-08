// Kombinasi beberapa fungsi
async function advancedExample() {
    // Menyimpan data dengan expiry
    EasyHelper.setStorageItem('userPrefs', {
        theme: 'dark',
        language: 'id'
    }, 24); // expired dalam 24 jam

    // Mengambil dan memproses array
    const numbers = [1, 2, 2, 3, 3, 4, 5, 5];
    const uniqueNumbers = EasyHelper.unique(numbers);
    const shuffledUnique = EasyHelper.shuffle(uniqueNumbers);
    const avg = EasyHelper.average(shuffledUnique);

    console.log('Rata-rata:', avg);
    console.log('Format currency:', EasyHelper.formatCurrency(avg));
} 