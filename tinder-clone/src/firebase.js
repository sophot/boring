import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA65YsbXish30eXbFvfL3FYyoig-R3SGNI",
  authDomain: "tinder-clone-14b81.firebaseapp.com",
  databaseURL: "https://tinder-clone-14b81.firebaseio.com",
  projectId: "tinder-clone-14b81",
  storageBucket: "tinder-clone-14b81.appspot.com",
  messagingSenderId: "839284767321",
  appId: "1:839284767321:web:25ec48953fbd0d7ffc8f48",
  measurementId: "G-JHWGLH0481",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
