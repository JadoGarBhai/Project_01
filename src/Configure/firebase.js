// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr1KDI4wB-SMvhdcG7RD5p_y3j5yJ6n5k",
  authDomain: "test-login-29.firebaseapp.com",
  projectId: "test-login-29",
  storageBucket: "test-login-29.appspot.com",
  messagingSenderId: "670991516240",
  appId: "1:670991516240:web:776be0754a2a027a97c755",
  measurementId: "G-25D7DXNZCN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
