export default class NewsCard {
    constructor() {
    }

    create(image, time, title, description, source, url) {
        this.image = image;
        this.time = time;
        this.title = title;
        this.description = description;
        this.source = source;
        this.url = url;

        this.card = document.createElement('a')
        this.cardImage = document.createElement('img');
        this.cardInfo = document.createElement('div');
        this.cardTime = document.createElement('p');
        this.cardTitle = document.createElement('h3');
        this.cardText = document.createElement('p');
        this.cardSource = document.createElement('a');

        this.card.classList.add('card');
        this.card.classList.add('link');
        this.cardImage.classList.add('card__image');
        this.cardInfo.classList.add('card__info');
        this.cardTime.classList.add('card__time');
        this.cardTitle.classList.add('card__title');
        this.cardText.classList.add('card__text');
        this.cardSource.classList.add('card__link');

        this.card.appendChild(this.cardImage);
        this.card.appendChild(this.cardInfo);
        this.cardInfo.appendChild(this.cardTime);
        this.cardInfo.appendChild(this.cardTitle);
        this.cardInfo.appendChild(this.cardText);
        this.cardInfo.appendChild(this.cardSource);

        this.card.href = this.url;
        this.card.target = '_blank';
        this.cardImage.src = this.image;
        this.cardTime.textContent = this.time;
        this.cardTitle.textContent = this.title;
        this.cardText.textContent = this.description;
        this.cardSource.textContent = this.source;

        return this.card;
    }
}