// стили CSS
import '../../pages/about.css';

// My Swiper
// core version + navigation, pagination modules:
import Swiper, {Pagination, Navigation} from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// подключение констант для корректной работы JS
import {
  COMMIT_API_URL
} from '../constants/constants.js';

// подключение вспомогательных функций
import {
  timeConverter
} from '../utils/utils.js';

// импортирую классы
import GithubApi from '../modules/GithubApi.js';
import Distributor from '../components/Distributor.js';
import CommitCard from '../components/CommitCard';
import CommitCardList from '../components/CommitCardList';

// DOM

// Контейнер где хранятся карточки с коммитами
const container = document.querySelector('.swiper-wrapper');

// Swiper
const swiper = new Swiper('.mySwiper', {
  // configure Swiper to use modules
  slidesPerView: 1,
  spaceBetween: 8,
  modules: [Pagination, Navigation],
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1025: {
      slidesPerView: 3,  
      spaceBetween: 16
    }
  }
});

// Инстансы классов
const card = new CommitCard();
const distributor = new Distributor(card, timeConverter);
const gitApi =  new GithubApi(COMMIT_API_URL);
const commitList = new CommitCardList(container, gitApi, distributor, swiper);