import { AElement } from './AElement.js';

class Header extends AElement {
    constructor() {
        super('header');
    }

    execute(strategy, param) {
        return strategy.header(this, param);
    }
}

export { Header };