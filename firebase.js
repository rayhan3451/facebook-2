import firebase from 'firebase'
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCyfDqX1PESxnD3E9ngrOhV4XoycDSQ9pw",
  authDomain: "facebook-2-546f8.firebaseapp.com",
  projectId: "facebook-2-546f8",
  storageBucket: "facebook-2-546f8.appspot.com",
  messagingSenderId: "531186554574",
  appId: "1:531186554574:web:9dcd574f3e5fb4c210a29f"
};

const app=!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db=app.firestore();
const storage=firebase.storage();

export{db,storage}