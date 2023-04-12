// Api
const API_KEY = '96da638911444dd2b3a83de2e14e3c1f';
const COMMIT_API_URL = 'https://api.github.com/repos/henry128bit/Whats-going-on-in-the-world/commits?per_page=20&sha256=zbzyiJwUBKyu7GA0ws7/nJvmPK1Tln98YVarAN+kMss';

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