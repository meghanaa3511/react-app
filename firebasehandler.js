// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo7H066QU-KsLwzLc0TxiofJm0NxqaA1A",
  authDomain: "test-project-5dc2b.firebaseapp.com",
  databaseURL: "https://test-project-5dc2b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-project-5dc2b",
  storageBucket: "test-project-5dc2b.appspot.com",
  messagingSenderId: "6472979986",
  appId: "1:6472979986:web:2555d082e7e64e4062aacb",
  measurementId: "G-RX7R9CE6MD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseDatabase = getDatabase(app);
export const firebaseAuth = getAuth(app);
