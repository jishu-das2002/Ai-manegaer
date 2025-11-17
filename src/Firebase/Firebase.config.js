// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoy_COZKhmXZ5WrZTlnHCvoxkPa6CA52E",
  authDomain: "sunflower-ab779.firebaseapp.com",
  projectId: "sunflower-ab779",
  storageBucket: "sunflower-ab779.firebasestorage.app",
  messagingSenderId: "155792948231",
  appId: "1:155792948231:web:4b927d1589eafe37dcbea2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);