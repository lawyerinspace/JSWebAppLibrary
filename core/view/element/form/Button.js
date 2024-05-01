import { AElement } from '../../AElement.js';

class Button extends AElement {
    constructor(text) {
        super('button');
        this.element.innerText = text;
    }

    execute(strategy, param) {
        return strategy.button(this, param);
    }
}

export { Button };