// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvrppdOQxpOkAPtJsV2308zua2OHO4FOA",
  authDomain: "cosmonavigator-997ca.firebaseapp.com",
  projectId: "cosmonavigator-997ca",
  storageBucket: "cosmonavigator-997ca.appspot.com",
  messagingSenderId: "39999886285",
  appId: "1:39999886285:web:4a79be9ff14c81a04f6a84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();