export default class CommitCard {
    constructor() {
    }

    create(data, image, title, mail, message) {
        this.data = data;
        this.image = image;
        this.title = title;
        this.mail = mail;
        this.message = message;

        this.card = document.createElement('div');
        this.cardData = document.createElement('p');
        this.cardInfo = document.createElement('div');
        this.cardImage = document.createElement('img');
        this.cardTitle = document.createElement('h3');
        this.cardMail = document.createElement('p');
        this.cardMessage = document.createElement('p');

        this.card.classList.add('history__swiper-slide');
        this.card.classList.add('swiper-slide');
        this.cardData.classList.add('history__data');
        this.cardInfo.classList.add('history__info');
        this.cardImage.classList.add('history__image');
        this.cardTitle.classList.add('history__name');
        this.cardMail.classList.add('history__mail');
        this.cardMessage.classList.add('history__comment');

        this.card.appendChild(this.cardData);
        this.card.appendChild(this.cardInfo);
        this.cardInfo.appendChild(this.cardImage);
        this.cardInfo.appendChild(this.cardTitle);
        this.cardInfo.appendChild(this.cardMail);
        this.cardInfo.appendChild(this.cardMessage);

        this.cardData.textContent = this.data;
        this.cardImage.src = this.image;
        this.cardTitle.textContent = this.title;
        this.cardMail.textContent = this.mail;
        this.cardMessage.textContent = this.message;

        return this.card;
    }
}