export default class Distributor {
    constructor(card, supFunc) {
        this.card = card;
        this.converter = supFunc;
    }

    assignment(data, type) {
        let arr = [];
        let timeType = 'yarsON';

        if (type === 'news') {
            data.articles.forEach(element => {
                let image = element.urlToImage;
                let time = this.converter(element.publishedAt, timeType);
                let title = element.title;
                let description = element.description;
                let source = element.source.name;
                let url = element.url;
                
                arr.push(this.card.create(image, time, title, description, source, url));
            })

            return arr;

        } else if (type === 'git') {
            data.forEach(element => {
                let time = this.converter(element.commit.author.date, timeType);
                let image = element.author.avatar_url;
                let title = element.commit.committer.name;
                let mail = element.commit.committer.email;
                let message = element.commit.message;
    
                arr.push(this.card.create(time, image, title, mail, message));
            })

            return arr;
        }
    }
}