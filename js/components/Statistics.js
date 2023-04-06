export default class Statistics {
    constructor(theme, weekNews, headline, graphMonth, graphTime, graphElement, storage, daysAgo, timeConverter, counter, getDay) {
        this.theme = theme;
        this.weekNumber = weekNews;
        this.headline = headline;
        this.graphMonth = graphMonth;
        this.graphTime = graphTime;
        this.graphElement = graphElement;
        this.storage = storage;
        this.daysAgo = daysAgo;
        this.converter = timeConverter;
        this.counter = counter;
        this.getDay = getDay;

        this.check();
        this.getDays();
    }

    check() {
        let saveTheme = this.storage.parceTheme();
        let saveData = this.storage.parceData();

        this.showStat(saveTheme, saveData);
        this.getGraphData(saveTheme, saveData);
    }

    showStat(topic, data) {
        this.theme.textContent = topic;
        this.weekNumber.textContent = data.totalResults;

        let type = "headline"
        let headlineNum = this.counter(data.articles, type, topic);
        this.headline.textContent = headlineNum;
    }

    getDays() {
        let week = [];
        let i = 0;
        while (i < 7) {
            week.unshift(this.daysAgo(i))
            i++
        }

        let days = [];
        let timeType = 'yarsOFF';
        week.map(element => {
            days.push(this.converter(element, timeType))
        })
        // console.log(days)

        this.showDays(days);
    }

    showDays(days) {
        let currentMonth = this.daysAgo(0).toLocaleString('default', { month: 'long' })
        this.graphMonth.textContent = currentMonth.toLowerCase();

        let i = 0;
        this.graphTime.forEach(element => {
            element.textContent = days[i];
            i++
        });
    }

    getGraphData(topic, data) {
        let weekDays = {
            mon: 0,
            tue: 0,
            wed: 0,
            thu: 0,
            fri: 0,
            sat: 0,
            sun: 0
        }

        let type = "days";
        data.articles.forEach(element => {
            if (this.getDay(element.publishedAt) === 1) {
                weekDays.mon += this.counter(element.title, type, topic);
                weekDays.mon += this.counter(element.description, type, topic);
            } else if (this.getDay(element.publishedAt) === 2) {
                weekDays.tue += this.counter(element.title, type, topic);
                weekDays.tue += this.counter(element.description, type, topic);
            } else if (this.getDay(element.publishedAt) === 3) {
                weekDays.wed += this.counter(element.title, type, topic);
                weekDays.wed += this.counter(element.description, type, topic);
            } else if (this.getDay(element.publishedAt) === 4) {
                weekDays.thu += this.counter(element.title, type, topic);
                weekDays.thu += this.counter(element.description, type, topic);
            } else if (this.getDay(element.publishedAt) === 5) {
                weekDays.fri += this.counter(element.title, type, topic);
                weekDays.fri += this.counter(element.description, type, topic);
            } else if (this.getDay(element.publishedAt) === 6) {
                weekDays.sat += this.counter(element.title, type, topic);
                weekDays.sat += this.counter(element.description, type, topic);
            } else if (this.getDay(element.publishedAt) === 0) {
                weekDays.sun += this.counter(element.title, type, topic);
                weekDays.sun += this.counter(element.description, type, topic);
            }
        })

        this.alignData(weekDays);
    }

    alignData(weekDays) {
        let d = this.daysAgo(0).getDay();

        let refNum = Object.values(weekDays);
        let difference = refNum.splice(0, d);
        let curWeekDays = refNum.concat(difference);

        this.drawGraph(curWeekDays);
    }

    drawGraph(weekDays) {
        // console.log(weekDays)
        for (let i = 0; i < 7; i++) {
            this.graphElement[i].textContent = weekDays[i];
            this.graphElement[i].style.width = weekDays[i] + "%";
        }
    }
}