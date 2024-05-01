import { AElement } from '../../AElement.js';

class TextInput extends AElement {
    constructor() {
        super('input');
        this.element.type = 'text';
    }

    setValue(value) {
        this.element.value = value;
        return this;
    }

    getValue(){
        return this.element.value;
    }

    setList(list){
        this.setAttribute('list', list.getId());
        return this;
    }

    execute(strategy, param) {
        return strategy.textInput(this, param);
    }
}

export { TextInput };