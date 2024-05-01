import { AElement } from './AElement.js';

class Article extends AElement {
    constructor() {
        super('article');
    }

    addSection(section){
        this.addChild(section);
        return this;
    }

    getSections(){
        return this.getChildren();
    }

    execute(strategy, param) {
        return strategy.article(this, param);
    }
}

export { Article };