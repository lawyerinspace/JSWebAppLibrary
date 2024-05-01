import { AElement } from '../../AElement.js';
import { Legend } from './Legend.js';

class Fieldset extends AElement {
    constructor() {
        super('fieldset');
        this.legend = new Legend();
        this.addChild(this.legend);
    }

    getLegend(){
        return this.legend;
    }

    addInput(input){
        this.addChild(input);
    }

    getInputs(){
        return this.getChildren();
    }

    execute(strategy, param) {
        return strategy.fieldset(this, param);
    }
}

export { Fieldset };