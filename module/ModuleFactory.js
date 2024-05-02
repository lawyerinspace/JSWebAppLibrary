class ModuleFactory {
    static create(name){
        return new Module(name);
    }

    static edit(json){

    }
}

class Module {

    // implement AObject, lastUpdate call onUpdate?

    constructor(name){
        this.module = {
            id: name,
            name: name,
            keyword: name,
            version: '',
            lastUpdate: '',
            description: '',
            dataTypes: {}, // need data structure
            templates: {} // need data structure
        }
    }

    loadJSON(json){
        this.module = json;
        return this;
    }

    toJSON(){
        return this.module;
    }

    setId(id){
        this.module.id = id;
        return this;
    }

    getId(){
        return this.module.id;
    }

    setName(name){
        this.module.name = name;
        return this;
    }

    getname(){
        return this.module.name;
    }

    // Write other settors and gettors fr this.module

    addDataType(dataType){
        this.module.dataTypes[dataType.id] = dataType.id;
        return this;
    }

    removeDataType(dataType){
        this.module.dataTypes[dataType.id] = '';
        return this;
    }

    addTemplate(template){
        this.module.templates[template.id] = template;
        return this;
    }

    removeTemplate(template){
        this.module.templates[template.id] = '';
        return this;
    }
}

class ViewFactory {
    static create(name){

    }
}