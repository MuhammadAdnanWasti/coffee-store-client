// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpyxK7m77dVzgymKrQNVo2BjvgRxFDscg",
  authDomain: "coffee-store-7e567.firebaseapp.com",
  projectId: "coffee-store-7e567",
  storageBucket: "coffee-store-7e567.firebasestorage.app",
  messagingSenderId: "16436081309",
  appId: "1:16436081309:web:2ea80347f80fc50e149a74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);