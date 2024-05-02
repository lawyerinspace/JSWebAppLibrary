class NullNode {
    constructor() {
        if (!NullNode.instance) {
            this.id = 'null-node';
            NullNode.instance = this;
        }

        return NullNode.instance;
    }

    visit(visitor, parameter) {
        return visitor.null(this, parameter);
    }
}

const nullNode = new NullNode();

export { nullNode }