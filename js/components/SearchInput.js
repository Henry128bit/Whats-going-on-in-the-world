export default class SearchInput {
    constructor(input, button, errorMessage, errObj, api) {
        this.input = input;
        this.button= button;
        this.errorMessage = errorMessage;
        this.errors = errObj;
        this.api = api;

        this.setEventListener();
    }

    // валидация отправки формы
    validate(event) {                                            
        event.preventDefault();
        
        if (!this.input.checkValidity()) {
            this.input.classList.add('header__input_invalid');
            this.errorMessage.textContent = this.errors.badValue;
        } else {
            this.errorMessage.textContent = '';
            this.input.classList.remove('header__input_invalid');
            this.api.getInfo();
        }
    }

    // проверка поля input при заполнении
    inputValidation() {
        if (this.input.value == '') {
            this.errorMessage.textContent = this.errors.emptyInput;
        } else if (!this.input.checkValidity()) {
            this.errorMessage.textContent = this.errors.invalidInput;
        } else {
            this.input.classList.remove('header__input_invalid');
            this.errorMessage.textContent = '';
        }
    }

    // очищает поле сообщения об ошибке при потере фокуса
    clearMessages() {
        this.input.classList.remove('header__input_invalid');
        this.errorMessage.textContent ='';
    }

    // листенеры
    setEventListener() {
        this.button.addEventListener('click', event => this.validate(event));
        this.input.addEventListener('input', () => this.inputValidation());
        this.input.addEventListener('blur', () => this.clearMessages());
    }
}