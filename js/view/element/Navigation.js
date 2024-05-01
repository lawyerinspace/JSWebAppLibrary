import { AElement } from '../AElement.js';

class Navigation extends AElement {
    constructor() {
        super('nav');
    }

    execute(strategy, param) {
        return strategy.navigation(this, param);
    }
}

export { Navigation };
