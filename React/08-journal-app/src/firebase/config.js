// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhMjuUY55b6yTA8l4e2HdSZ1oQWQMekRM",
  authDomain: "react-curso-6ff79.firebaseapp.com",
  projectId: "react-curso-6ff79",
  storageBucket: "react-curso-6ff79.firebasestorage.app",
  messagingSenderId: "785078393435",
  appId: "1:785078393435:web:e70d0adaafd19d09a3fd7e"
};

// Initialize Firebase
 export const FirebaseApp = initializeApp(firebaseConfig);
 
 export const FirebaseAuth= getAuth ( FirebaseApp);

 export const FirebaseDB = getFirestore( FirebaseApp);