import { ADatabase } from '../ADatabase.js';

class FirebaseDatabase extends ADatabase {
    constructor(firebaseApp) {
        super();
        this.database = firebaseApp.database();
    }
    
    // Method to get data from Realtime Database
    getData = (path, callback) => {
        this.database.ref(path).on('value', (snapshot) => {
            callback(snapshot.val());
        });
    }

    // Method to add data to Realtime Database
    addData = (path, data) => {
        this.database.ref(path).push(data);
    }

    // Method to update data in Realtime Database
    updateData = (path, newData) => {
        this.database.ref(path).set(newData);
    }

    // Method to delete data from Realtime Database
    deleteData = (path) => {
        this.database.ref(path).remove();
    }
}

export { FirebaseDatabase };