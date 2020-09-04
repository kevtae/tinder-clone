import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCiwGfhrVXytQKqgjjbtiCr9DuB7PIMHQY",
  authDomain: "tinder-clone-e4425.firebaseapp.com",
  databaseURL: "https://tinder-clone-e4425.firebaseio.com",
  projectId: "tinder-clone-e4425",
  storageBucket: "tinder-clone-e4425.appspot.com",
  messagingSenderId: "273083418896",
  appId: "1:273083418896:web:8f4f3fb096511f7a227d95",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
