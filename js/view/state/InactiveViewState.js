import { AState } from '../AState.js';

class InactiveViewState extends AState {
    constructor() {
        super();
    }

    execute(element, strategy, parameter) {
        return element.inactive(strategy, parameter);
    }
}

export { InactiveViewState };
