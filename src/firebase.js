// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdAAEYjSKdPYC9b6IJshXJo7C392C7jkA",
    authDomain: "project-12c55.firebaseapp.com",
    databaseURL: "https://project-12c55-default-rtdb.firebaseio.com",
    projectId: "project-12c55",
    storageBucket: "project-12c55.firebasestorage.app",
    messagingSenderId: "320541860200",
    appId: "1:320541860200:web:fc33f6717c87d780f736dd",
    measurementId: "G-EB29H08MLL"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Initialize Firestore and export it
const db = getFirestore(app);
export { db };







