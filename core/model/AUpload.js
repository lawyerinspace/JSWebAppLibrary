import { AObject } from '../AObject.js';

class ADatabase extends AObject {
    constructor(firebaseApp) {
        if (new.target === ADatabase) {
            throw new Error('Abstract class ADatabase cannot be instantiated.');
        }
        this.database = firebaseApp.database();
    }

    getData = () => {
        throw new Error('Method getData must be implemented in concrete class.');
    }

    addData = () => {
        throw new Error('Method addData must be implemented in concrete class.');
    }

    updateData = () => {
        throw new Error('Method updateData must be implemented in concrete class.');
    }

    deleteData = () => {
        throw new Error('Method deleteData must be implemented in concrete class.');
    }

    // Define other abstract methods for database operations here
}

export { ADatabase };
