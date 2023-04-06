// Api
const API_KEY = '96da638911444dd2b3a83de2e14e3c1f';
const COMMIT_API_URL = 'https://api.github.com/repos/genry12Oz/What-s-going-on-in-the-world/commits?per_page=20&sha=7cf3284d1ad8b8a6efd5c0c03ac93a';

// Сообщения об ошибках
const ERRORS = {
    badValue: 'Нужно ввести ключевое слово',
    emptyInput: 'Это поле не должно быть пустым',
    invalidInput: 'Спецсимволы не разрешены'
};

export {
    API_KEY,
    COMMIT_API_URL,
    ERRORS
};