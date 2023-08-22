// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "/firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC15lYDihR1mWeh8nAQaMRVbkXvu6M0H7s",
  authDomain: "whatsapp-clone-87330.firebaseapp.com",
  projectId: "whatsapp-clone-87330",
  storageBucket: "whatsapp-clone-87330.appspot.com",
  messagingSenderId: "175962237394",
  appId: "1:175962237394:web:f07d2bd98df28a9e63400b",
  measurementId: "G-64GGP22B6J",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
