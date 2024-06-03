// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDwnsa1a4zUfehhaGibyBHyp4kYD7WqUDY",
  authDomain: "movie-5de47.firebaseapp.com",
  projectId: "movie-5de47",
  storageBucket: "movie-5de47.appspot.com",
  messagingSenderId: "669879732879",
  appId: "1:669879732879:web:758faaacabec16ca643efa",
  measurementId: "G-P8LSME6X21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =  getAuth(app)

export{ app, auth}