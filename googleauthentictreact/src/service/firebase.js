// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDkOA4bp431Gk9d2_VExWZPwy1y8M8Tm8",
  authDomain: "private-a3539.firebaseapp.com",
  projectId: "private-a3539",
  storageBucket: "private-a3539.appspot.com",
  messagingSenderId: "1040004392756",
  appId: "1:1040004392756:web:2d8980939b22587be4e761",
  measurementId: "G-G2DELLNDNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();