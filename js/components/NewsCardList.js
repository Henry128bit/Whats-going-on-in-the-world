export default class NewsCardList {
    constructor(storage, distributor, container, card, form, button, block) {
        this.storage = storage;
        this.distributor = distributor;
        this.container = container;
        this.card = card;
        this.form = form;
        this.button = button;
        this.block = block;

        let arr = this.arr;

        this.setEventListener();
        this.check();
    }

    check() {
        let saveData = this.storage.parceData();

        if (saveData == 0) {
            this.clean()
        } else {
            this.render(saveData)
        }
    }

    render(data) {
        this.container.textContent = '';
        
        let type = 'news';
        this.arr = this.distributor.assignment(data, type);

        this.addCard();

        this.block.classList.remove('results_hide');
        this.form.classList.add('results__form_active');
    }
    
    addCard() {
        let i = 3;
        while (i && this.arr.length) {
            this.container.appendChild(this.arr.shift());
            i--;
        }

        if (!this.arr.length) {
            this.form.classList.remove('results__form_active');
        }
    }

    clean() {
        this.block.classList.add('results_hide');
    }

    setEventListener() {
        this.button.addEventListener('click', () => this.addCard());
    }
}