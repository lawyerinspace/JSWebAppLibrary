import { AElement } from '../../AElement.js';

class Legend extends AElement {
    constructor() {
        super('legend');
    }

    execute(strategy, param) {
        return strategy.legend(this, param);
    }
}

export { Legend };