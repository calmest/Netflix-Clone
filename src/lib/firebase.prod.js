import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

// we need to somehow seed the database

// we need a config here
const config = {
  apiKey: "AIzaSyAm7baAXvmkkz7-efWMO7Aw7Fe7BRQ0_Ck",
  authDomain: "netflix-clone-a8c6f.firebaseapp.com",
  databaseURL: "https://netflix-clone-a8c6f.firebaseio.com",
  projectId: "netflix-clone-a8c6f",
  storageBucket: "netflix-clone-a8c6f.appspot.com",
  messagingSenderId: "561356178128",
  appId: "1:561356178128:web:233b145bfa0044307bd4d5",
  measurementId: "G-00DW870LYV",
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
