// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-eaca8.firebaseapp.com",
  projectId: "mern-real-estate-eaca8",
  storageBucket: "mern-real-estate-eaca8.appspot.com",
  messagingSenderId: "604206702552",
  appId: "1:604206702552:web:81d7c34ca0eb487d3c1cad",
  measurementId: "G-ZYF5424HEJ"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);