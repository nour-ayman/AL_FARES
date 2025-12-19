// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnzZ-AmhzZBkuq0VA0TSzrsvMYCQvJG-o",
  authDomain: "alfares-2e6a4.firebaseapp.com",
  databaseURL: "https://alfares-2e6a4-default-rtdb.firebaseio.com",
  projectId: "alfares-2e6a4",
  storageBucket: "alfares-2e6a4.firebasestorage.app",
  messagingSenderId: "746018002614",
  appId: "1:746018002614:web:86e4e6cc52cbe7d7563817",
  measurementId: "G-4K4CFXNVFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
