// Importing the AObject base class
import { AObject } from '../../AObject.js';

// AView.js
class AView extends AObject {
    constructor() {
        super();
        if (new.target === AView) {
            throw new TypeError("Cannot construct AView instances directly");
        }
    }

    // Abstract method render
    render(data, actions) {
        throw new Error("Method 'render()' must be implemented.");
    }
}

export { AView };
