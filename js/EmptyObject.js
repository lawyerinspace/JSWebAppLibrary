class EmptyObject {
    constructor() {
        if(!EmptyObject.instance){
            EmptyObject.instance = this;
        }
        return EmptyObject.instance;
    }

    execute(strategy, parameter) {
        return strategy.empty(this, parameter);
    }

    visit(visitor, parameter) {
        return visitor.empty(this, parameter);
    }
}

export { EmptyObject };
