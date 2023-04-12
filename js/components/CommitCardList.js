export default class CommitCardList {
    constructor(container, api, distributor, swiper) {
        this.container = container;
        this.api = api;
        this.distributor = distributor;
        this.swiper = swiper;

        this.render();
    }

    render() {
        debugger
        this.container.textContent = '';

        let arr;
        let type = 'git';
        this.api.getCommits()
            .then(data => {
                arr = this.distributor.assignment(data, type)
            })
            .then(() => {
                this.addCard(arr)
            })
    }

    addCard(arr) {
        arr.forEach(element => {
            this.container.appendChild(element)
        })

        this.swiper.update();
    }
}