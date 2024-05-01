import { AUpload } from '../library.js';

class FirebaseUpload extends AUpload {
    constructor(firebaseApp) {
        super();
        this.storage = firebaseApp.storage();
        this.uploadTask = null;
    }

    uploadFile = (file, storagePath) => {
        const storageRef = this.storage.ref(storagePath);
        this.uploadTask = storageRef.put(file);

        this.uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                this.notify('progress', { progress });
            },
            (error) => {
                this.notify('status', { success: false, error: error.message });
            },
            () => {
                this.notify('status', { success: true, imageUrl: this.uploadTask.snapshot.downloadURL });
            }
        );
    }

    pauseUpload = () => {
        if (this.uploadTask) {
            this.uploadTask.pause();
            this.notify('status', { success: false, message: 'Upload paused' });
        }
    }

    resumeUpload = () => {
        if (this.uploadTask) {
            this.uploadTask.resume();
            this.notify('status', { success: true, message: 'Upload resumed' });
        }
    }

    cancelUpload = () => {
        if (this.uploadTask) {
            this.uploadTask.cancel();
            this.uploadTask = null;
            this.notify('status', { success: false, message: 'Upload cancelled' });
        }
    }
}

export { FirebaseUpload };
