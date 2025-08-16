// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNf7s1E8GoBQLgFmzlmZVPZ7BRHK5KwRw",
  authDomain: "gen30-5a8c1.firebaseapp.com",
  projectId: "gen30-5a8c1",
  storageBucket: "gen30-5a8c1.firebasestorage.app",
  messagingSenderId: "661381911341",
  appId: "1:661381911341:web:af9d2a9e1697e81a08b9a4",
  measurementId: "G-KN6FE0HQPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//initialise firestore
const db = getFirestore(app)
export {db}