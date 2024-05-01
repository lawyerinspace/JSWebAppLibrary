import { AElement } from '../../AElement.js';

class Select extends AElement {
    constructor() {
        super('select');
    }

    getValue(){
        return this.element.value;
    }

    addOption(option) {
        this.addChild(option);
        return this;
    }

    getOptions(){
        return this.getChildren();
    }

    execute(strategy, param) {
        return strategy.select(this, param);
    }
}

export { Select };