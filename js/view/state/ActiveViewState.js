import { AState } from '../AState.js';

class ActiveViewState extends AState {
    constructor() {
        super();
    }

    execute(element, strategy, parameter) {
        return element.active(strategy, parameter);
    }
}

export { ActiveViewState };