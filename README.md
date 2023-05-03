[What's going on in the world?](https://henry128bit.github.io/Whats-going-on-in-the-world/)
=====================
Graduation project
---
This project showcases my skills in creating multipage websites.

How the service works:
1. Enter the topic of interest into the search field.
2. The service makes an API request to search for this topic in Russian news.
3. You receive the response in the form of cards with brief news summaries that are clickable, so by clicking on them, you will be taken to the source website.
4. Clicking on the "view analytics" link shows you a chart of the frequency of keyword mentions by day of the week and the number of keyword mentions in article headlines.

Technologies used:
* **HTML и CSS** - using the **BEM** methodology allows for element reuse on different website pages.
* **JavaScript** - the website is written using **OOP**, which makes it easier to maintain and refactor. News cards are added to the DOM from JS code.
* The project is built using **webpack**.
* **Fetch** - asynchronous **GET** and **POST** requests to the API. The server response is processed.
* Data is passed from page to page using **localStorage**.
* **API** - an API request is made after entering a word. The API service is https://newsapi.org.
* **Github API** - shows the last 20 commits of my repository.
* **Слайдер** - a ready-made slider is used: http://idangero.us/swiper/. Installed via **npm**.

[Что в мире творится?](https://henry128bit.github.io/Whats-going-on-in-the-world/)
=====================
Дипломный проект
---
В этом проекте представлены мои навыки по созданию многостраничных сайтов.

Как работает сервис:
1. Вводите интересующую вас тему в поисковое поле.
2. Осуществляется запрос к API, с поиском этой темы по российским новостям.
3. Ответ вы получаете в виде карточек с кратким содержанием новостей, они кликабельны так что нажав на них вы перейдете на сайт-источник.
4. Кликнув по ссылке "посмотреть аналитику" - вы увидите диаграмму частоты упоминаний ключевого слова по дням недели, а также количество упоминаний ключевых слов в заголовках статей.

Кратко о технологиях:
* **HTML и CSS** - использование методологии **БЭМ** позволяет переиспользовать элементы на разных страницах сайта.
* **JavaScript** - сайт написан с использованием **ООП**, что облегчает его поддержку и рефакторинг. Карточки с новостями добавляются в DOM из JS-кода.
* Проект собран с помощью **webpack**.
* **Fetch** - асинхронные **GET** и **POST** запросы к API. Ответ от сервера обрабатывается.
* Данные передаются от страницы к странице посредством **localStorage**.
* **API** - после введения слова осуществляется запрос к API. Сервис API — https://newsapi.org.
* **Github API** - показывает последние 20 коммитов моего репозитория.
* **Слайдер** - использован готовый слайдер: http://idangero.us/swiper/. Установлен через **npm-пакет**.
