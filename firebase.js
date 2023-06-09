// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpb4EknJwBBrFhPtXQUBiqTa_H9XbU1xQ",
  authDomain: "mymentee-60613.firebaseapp.com",
  projectId: "mymentee-60613",
  storageBucket: "mymentee-60613.appspot.com",
  messagingSenderId: "423996447073",
  appId: "1:423996447073:web:476a1c054a39484e0f0d20"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };