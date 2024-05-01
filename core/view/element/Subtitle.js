import { AElement } from '../AElement.js';

class Subtitle extends AElement {
    constructor(text) {
        super('h2');
        this.setText(text);
    }

    execute(strategy, param) {
        return strategy.subtitle(this, param);
    }
}

export { Subtitle };