// стили CSS
import '../../pages/analytics.css';

// подключение констант для корректной работы JS
import {
    daysAgo,
    timeConverter,
    counter,
    getDay
  } from '../utils/utils.js';

// импортирую классы
import DataStorage from '../modules/DataStorage.js';
import Statistics from '../components/Statistics.js';

// Блок статистики
const theme = document.querySelector('.statistics__category');
const weekNews = document.querySelector('.statistics__number_week');
const headline = document.querySelector('.statistics__number_headline');

// График
const graphMonth = document.querySelector('.graph__month');
const graphTime = document.querySelectorAll('.graph__data');
const graphElement = document.querySelectorAll('.graph__element');

// инстансы классов
const storage = new DataStorage();
const stat = new Statistics(theme, weekNews, headline, graphMonth, graphTime, graphElement, storage, daysAgo, timeConverter, counter, getDay);

//Test
console.log('Hello Analytics!');