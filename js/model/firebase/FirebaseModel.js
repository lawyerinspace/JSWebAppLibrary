import { AModel } from '../AModel.js';

class FirebaseModel extends AObject {
    constructor(firebaseConfig) {
        super();
        this.firebaseApp = firebase.initializeApp(firebaseConfig);
    }

    signIn = async (email, password) => {
        try {
            await this.firebaseApp.auth().signInWithEmailAndPassword(email, password);
            console.log("Signed in successfully");
        } catch (error) {
            console.error("Sign-in error:", error);
            this.notify('error', error.message);
        }
    }

    signOut = async () => {
        try {
            await this.firebaseApp.auth().signOut();
            console.log("Signed out successfully");
        } catch (error) {
            console.error("Sign-out error:", error);
            this.notify('error', error.message);
        }
    }

    getDatabase = () => {
        return new FirebaseDatabase(this.firebaseApp);
    }

    getNewUpload = () => {
        return new FirebaseUpload(this.firebaseApp);
    }
}

export { FirebaseModel };
