export default class DataStorage {
    constructor() {
        this.storage = localStorage;
    }

    // очищаю хранилище и сохраняю новые данные
    saveData(data, topic) {
        this.storage.clear();

        this.storage.setItem('data', JSON.stringify(data));
        this.storage.setItem('theme', JSON.stringify(topic));

        // console.log(this.storage.getItem ('theme'));
    }

    parceData() {
        if (this.storage.getItem('data') == null) {
            // console.log("в хранилище пусто");
            return 0
        } else {
            let storageData = JSON.parse(this.storage.getItem ('data'));
            // console.log("в хранилище есть данные");
            // console.log(storageData);
            return storageData
        }
    }

    parceTheme() {
        let storageTheme = JSON.parse(this.storage.getItem ('theme'));
        return storageTheme
    }
}