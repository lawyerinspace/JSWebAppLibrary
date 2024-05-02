// File: library/core/view/element/Workspace.js

import { AbstractViewNode } from '../AbstractViewNode.js';

class Workspace extends AbstractViewNode {
    constructor(id) {
        super(id, 'workspace', 'div'); // Use the tag that best fits the semantic structure of your app
        this.addClass('workspace'); // Assuming AbstractViewNode has a method to add CSS classes
    }

    // Overriding or extending the existing drag and drop handling
    handleDrop(type, event) {
        super.handleDrop(type, event); // Call the superclass method if it does anything important
        // Add specific logic for the Workspace, if needed
        if (type === 'section-block') {
            const newSection = new Section(`section-${Date.now()}`);
            this.addChild(newSection);
            this.getDom().appendChild(newSection.getDom());
        }
    }
}

export { Workspace };
