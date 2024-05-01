import { AElement } from '../AElement.js';

class Footer extends AElement {
    constructor() {
        super('footer');
    }

    execute(strategy, param) {
        return strategy.footer(this, param);
    }
}

export { Footer };