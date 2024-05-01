import { AElement } from '../../AElement.js';

class Caption extends AElement {
    constructor() {
        super('caption');
    }

    setText(text) {
        this.element.innerText = text || '';
        return this;
    }

    execute(strategy, param) {
        return strategy.caption(this, param);
    }
}

export { Caption };
