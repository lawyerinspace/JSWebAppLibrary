import { AElement } from '../AElement.js';

class Section extends AElement {
    constructor() {
        super('section');
    }

    execute(strategy, param) {
        return strategy.section(this, param);
    }
}

export { Section };