// стили CSS
import '../pages/index.css';

// подключение констант для корректной работы JS
import {
  API_KEY,
  ERRORS
} from './constants/constants.js';

// подключение вспомогательных функций
import {
  currentData,
  daysAgo,
  timeConverter
} from './utils/utils.js';

// импортирую классы
import DataStorage from './modules/DataStorage.js';
import NewsCard from './components/NewsCard.js';
import Distributor from './components/Distributor.js';
import NewsCardList from './components/NewsCardList.js';
import NewsApi from './modules/NewsApi.js';
import SearchInput from './components/SearchInput.js';

// DOM

// Форма поиска
const input = document.querySelector('.header__input');
const errorMessage = document.getElementById('error-message');
const submitButton = document.getElementById('submit-header');
// Api
const preloader = document.querySelector('.preloader');
const notFound = document.querySelector('.error');
// Блок с новостями
const resultsBlock = document.querySelector('.results');
const container = document.querySelector('.results__container');
const resultsForm = document.querySelector('.results__form');
const addButton = document.getElementById('add-button');

// Инстансы классов
const storage = new DataStorage();
const card = new NewsCard();
const distributor = new Distributor(card, timeConverter);
const cardList = new NewsCardList(storage, distributor, container, card, resultsForm, addButton, resultsBlock);
const api = new NewsApi(input, API_KEY, currentData, daysAgo, preloader, notFound, storage, cardList);
const search = new SearchInput(input, submitButton, errorMessage, ERRORS, api);

// Test
console.log('Hello Index!');