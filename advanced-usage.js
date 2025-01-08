// Validasi password
console.log(EasyHelper.isStrongPassword('Abc12345')); // true

// Generate random string
const randomId = EasyHelper.generateRandomString(10);
console.log(randomId);

// Format ukuran file
console.log(EasyHelper.formatFileSize(1234567)); // "1.18 MB"

// Time ago
console.log(EasyHelper.timeAgo('2024-01-01')); // "2 bulan yang lalu"

// Truncate text
const longText = "Lorem ipsum dolor sit amet consectetur adipisicing elit...";
console.log(EasyHelper.truncateText(longText, 20)); // "Lorem ipsum dolor si..."

// Query string
const params = { name: 'John Doe', age: 30 };
console.log(EasyHelper.toQueryString(params)); // "name=John%20Doe&age=30"

// Debounce example untuk search
const searchInput = document.querySelector('#search');
const handleSearch = EasyHelper.debounce(() => {
    console.log('Searching...');
}, 500);

searchInput.addEventListener('input', handleSearch);

// Cookie management
EasyHelper.setCookie('theme', 'dark', 30);
console.log(EasyHelper.getCookie('theme')); // "dark" 