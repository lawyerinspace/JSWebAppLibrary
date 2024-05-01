import { AState } from '../AState.js';
import { ActiveViewState } from './ActiveViewState.js';

class InactiveViewState extends AState {
    constructor() {
        super();
        if (InactiveViewState.instance) {
            return InactiveViewState.instance;
        }
        InactiveViewState.instance = this;
    }

    toggle(){
        return new ActiveViewState();
    }

    execute(strategy, element, param) {
        return strategy.inactive(element, param);
    }
}

export { InactiveViewState };
