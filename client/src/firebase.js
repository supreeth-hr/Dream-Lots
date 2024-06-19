// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-525e5.firebaseapp.com",
  projectId: "mern-real-estate-525e5",
  storageBucket: "mern-real-estate-525e5.appspot.com",
  messagingSenderId: "288247066032",
  appId: "1:288247066032:web:987a200d63a02ee984fa75"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);