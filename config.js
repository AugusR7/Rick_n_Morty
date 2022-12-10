import { initializeApp } from "firebase/app";  
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA_IkN13c3fFYHLc-jht4E018e9Um70wcQ",
  authDomain: "rick-n-morty-final.firebaseapp.com",
  databaseURL: "https://rick-n-morty-final-default-rtdb.firebaseio.com",
  projectId: "rick-n-morty-final",
  storageBucket: "rick-n-morty-final.appspot.com",
  messagingSenderId: "896780655843",
  appId: "1:896780655843:web:2af159d6514561b234b9d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database =  getDatabase(app);

export { database };
