// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFd6J7q0UxYd0CnEsuiL6Y8j_-lVWyMg4",
  authDomain: "remix-todo-b54a7.firebaseapp.com",
  databaseURL: "https://remix-todo-b54a7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "remix-todo-b54a7",
  storageBucket: "remix-todo-b54a7.appspot.com",
  messagingSenderId: "547894053845",
  appId: "1:547894053845:web:7549ec0129cba0daf9cb5c",
  measurementId: "G-KM096PNLGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);

export {auth, database}