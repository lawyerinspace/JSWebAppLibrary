import { AElement } from '../../AElement.js';

class TextArea extends AElement {
    constructor() {
        super('textarea');
    }

    setValue(value) {
        this.element.value = value;
        return this;
    }

    getValue(){
        return this.element.value;
    }

    execute(strategy, param) {
        return strategy.textArea(this, param);
    }
}

export { TextArea };