import { AObject } from '../AObject.js';

class AModel extends AObject {
    constructor(firebaseConfig) {
        if (new.target === AModel) {
            throw new Error('Abstract class AModel cannot be instantiated.');
        }
        this.firebaseConfig = firebaseConfig;
        this.firebaseApp = null; // To be initialized in concrete classes
    }

    getNewUpload = () => {
        throw new Error('Method getNewUpload must be implemented in concrete class.');
    }

    signIn = async (email, password) => {
        throw new Error('Method signIn must be implemented in concrete class.');
    }

    signOut = async () => {
        throw new Error('Method signOut must be implemented in concrete class.');
    }

    getDatabase = () => {
        throw new Error('Method getDatabase must be implemented in concrete class.');
    }
}

export { AModel };
