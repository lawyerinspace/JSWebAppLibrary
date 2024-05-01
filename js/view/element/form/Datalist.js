import { AElement } from '../../AElement.js';

class Datalist extends AElement {
    constructor() {
        super('datalist');
    }

    addOption(option) {
        this.addChild(option);
        return this;
    }

    execute(strategy, param) {
        return strategy.datalist(this, param);
    }
}

export { Datalist };