import { AElement } from '../../AElement.js';

class Form extends AElement {
    constructor() {
        super('form');
    }
    addFieldset(fieldset){
        this.addChild(fieldset);
        return this;
    }

    getFieldsets(){
        return this.getChildren();
    }

    execute(strategy, param) {
        return strategy.form(this, param);
    }
}

export { Form };