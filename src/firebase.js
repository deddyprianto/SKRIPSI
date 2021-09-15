import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDuz3zPqRrQ06DgLfjAANwbDmHlP33n6Zc",
  authDomain: "deychat-c8834.firebaseapp.com",
  projectId: "deychat-c8834",
  storageBucket: "deychat-c8834.appspot.com",
  messagingSenderId: "907353408142",
  appId: "1:907353408142:web:f5989d039d00de8bfaffdf",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export default db;
