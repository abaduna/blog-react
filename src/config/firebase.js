// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQhJxZK5o6bE81ZXkLCItZ0WDDZi6BSLo",
  authDomain: "blogpoyec.firebaseapp.com",
  projectId: "blogpoyec",
  storageBucket: "blogpoyec.appspot.com",
  messagingSenderId: "299903130443",
  appId: "1:299903130443:web:4b2d45add302125f1fa6ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =getFirestore(app)

export const auth = getAuth(app)
export const provider = new  GoogleAuthProvider()