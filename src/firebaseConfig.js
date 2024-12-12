// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBML1DqbTrut5oLY9IQNzqNPLEeUehh1Ts",
  authDomain: "andrei-gheorghe-s-portofolio.firebaseapp.com",
  projectId: "andrei-gheorghe-s-portofolio",
  storageBucket: "andrei-gheorghe-s-portofolio.firebasestorage.app",
  messagingSenderId: "1027511697908",
  appId: "1:1027511697908:web:50fa83a5f79b16190879a1",
  measurementId: "G-T0LEKRW4LY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);