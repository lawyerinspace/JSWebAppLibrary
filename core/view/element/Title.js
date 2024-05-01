import { AElement } from '../AElement.js';

class Title extends AElement {
    constructor(text) {
        super('h1');
        this.setText(text);
    }

    execute(strategy, param) {
        return strategy.title(this, param);
    }
}

export { Title };