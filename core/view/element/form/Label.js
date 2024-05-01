import { AElement } from '../../AElement.js';

class Label extends AElement {
    constructor() {
        super('label');
    }

    setFor(element) {
        this.element.htmlFor = element.getId();
        return this;
    }

    execute(strategy, param) {
        return strategy.label(this, param);
    }
}

export { Label };