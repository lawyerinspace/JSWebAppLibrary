import { AState } from '../AState.js';
import { InactiveViewState } from './InactiveViewState.js';

class ActiveViewState extends AState {
    constructor() {
        super();
        if (ActiveViewState.instance) {
            return ActiveViewState.instance;
        }
        ActiveViewState.instance = this;
    }

    toggle(){
        return new InactiveViewState();
    }

    execute(strategy, element) {
        return strategy.active(element);
    }
}

export { ActiveViewState };