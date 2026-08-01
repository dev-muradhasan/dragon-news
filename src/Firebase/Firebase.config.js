// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhQkVwGhoajMvmAgvP_UyUbsk8BbJ_hNs",
  authDomain: "dragon-news-79a17.firebaseapp.com",
  projectId: "dragon-news-79a17",
  storageBucket: "dragon-news-79a17.firebasestorage.app",
  messagingSenderId: "474417720660",
  appId: "1:474417720660:web:3895a291095fef06232cc1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);