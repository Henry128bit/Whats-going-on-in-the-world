export default class NewsApi {
    constructor (input, apiKey, currentData, daysAgo, preloader, notFound, storage, instance) {
        this.input = input;
        this.key = apiKey;
        this.currentData = currentData;
        this.daysAgo = daysAgo;
        this.loader = preloader;
        this.error = notFound;
        this.storage = storage;
        this.instance = instance;
    }

    // получение данных с сервера
    getInfo() {
        this.error.classList.remove('error_active');

        let topic = this.input.value;

        let timeNow = this.currentData();
        timeNow = timeNow.toISOString();

        let weekAgo = this.daysAgo(7);
        weekAgo = weekAgo.toISOString();

        let url = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${weekAgo}&to=${timeNow}&language=ru&pageSize=100&apiKey=${this.key}`;

        fetch(url)
          .then(res => {
            this.loader.classList.add('preloader_active');
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
          .then(data => {
            this.storage.saveData(data, topic);
            this.instance.check();
            this.loader.classList.remove('preloader_active');
        })
          .catch(err => {
            this.error.classList.add('error_active');
            console.log(err);
        })
    }
}