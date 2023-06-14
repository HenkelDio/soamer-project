// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChYd8NPLng46sdP_yRLMi6mti9lMTGiMc",
  authDomain: "soamer-project.firebaseapp.com",
  projectId: "soamer-project",
  storageBucket: "soamer-project.appspot.com",
  messagingSenderId: "569500730821",
  appId: "1:569500730821:web:1ab6f5e2b6e13ea631f7ac",
  measurementId: "G-X4JG38LN3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db};