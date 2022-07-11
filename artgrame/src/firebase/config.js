import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUBEVh3-MNT2B_ZuObNzlBNM9goYWc3mw",
  authDomain: "firegram-340a3.firebaseapp.com",
  projectId: "firegram-340a3",
  storageBucket: "firegram-340a3.appspot.com",
  messagingSenderId: "872618895810",
  appId: "1:872618895810:web:04fac1f54fd3ef80dbce5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };