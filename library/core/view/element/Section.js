// File: library/core/view/element/Section.js

import { AbstractViewNode } from '../AbstractViewNode.js';  // Correct path with extension

class Section extends AbstractViewNode {
    constructor(id) {
        super(id, 'section', 'section');
    }

    toJSON() {
        let children = Object.values(this._children).map(child => child.toJSON());
        return {
            id: this._id,
            type: this._type,
            children: children
        };
    }
}

export { Section };
