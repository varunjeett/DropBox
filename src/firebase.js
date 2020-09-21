// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBBoUpFFOm6MMTFRLbIAkZIOztjzWvCGf0",
  authDomain: "myslack-9d964.firebaseapp.com",
  databaseURL: "https://myslack-9d964.firebaseio.com",
  projectId: "myslack-9d964",
  storageBucket: "myslack-9d964.appspot.com",
  messagingSenderId: "75586715218",
  appId: "1:75586715218:web:9c4ec1d175c5acc6e1e98b",
  measurementId: "G-EX7WEHEVWJ",
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const auth=firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider};
export default firebase;

// export default db;  use import db from "./firebase.js";