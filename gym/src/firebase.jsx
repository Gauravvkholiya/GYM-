// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0irvmKsL_rDJi8rgl4MAEA0DkV7I2e3o",
  authDomain: "gymapp-98ac1.firebaseapp.com",
  projectId: "gymapp-98ac1",
  storageBucket: "gymapp-98ac1.firebasestorage.app",
  messagingSenderId: "562988657398",
  appId: "1:562988657398:web:87025fcc47d2066d855ad7",
  databaseURL: "https://console.firebase.google.com/project/gymapp-98ac1/database/gymapp-98ac1-default-rtdb/data/~2F?fb_gclid=Cj0KCQjw9obIBhCAARIsAGHm1mRaPmwDLSO4iyWiHG0t2Dbgra-_ZKZJmJy4ZiU5OtZy7QSDdNH6XHMaApTUEALw_wcB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
