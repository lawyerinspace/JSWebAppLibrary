import { AObject } from '../../AObject.js';

class AState extends AObject {
    constructor() {
        super();
    }

    execute(strategy, param){
        throw new Error('Method execute must be implemented in concrete class.');
    }
}

export { AState };