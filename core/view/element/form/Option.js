import { AElement } from '../../AElement.js';

class Option extends AElement {
    constructor(text, value) {
        super('option');
        this.element.text = text;
        this.element.value = value;
    }

    setValue(value){
        this.element.value = value;
        return this;
    }

    getValue(){
        return this.element.value;
    }

    setText(text){
        this.element.text = text;
        return this;
    }

    getText(){
        return this.element.text;
    }

    select(){
        this.element.selected = 'selected';
    }

    isSelected(){
        return this.element.selected == 'selected';
    }

    execute(strategy, param) {
        return strategy.option(this, param);
    }
}

export { Option };