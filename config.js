import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAAeXwMdSANjYEqPJ8mC4SXAWV7NjvSR6Q",
  authDomain: "ryck-n-morty.firebaseapp.com",
  projectId: "ryck-n-morty",
  storageBucket: "ryck-n-morty.appspot.com",
  messagingSenderId: "244917769900",
  appId: "1:244917769900:web:2ffc6e833f556214217109",
  measurementId: "G-56P6WG2D54",
  databaseURL: "https://ryck-n-morty-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
