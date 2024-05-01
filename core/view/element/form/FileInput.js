import { AElement } from '../../AElement.js';

class FileInput extends AElement {
    constructor() {
        super('input');
        this.element.type = 'file';
    }

    execute(strategy, param) {
        return strategy.fileInput(this, param);
    }
}

export { FileInput };