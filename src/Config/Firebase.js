// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getDatabase} from "firebase/database";
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOYzGYslvt2Vjk752hTkO-X77sU5nDfhc",
  authDomain: "expense-tracker-fe43e.firebaseapp.com",
  databaseURL: "https://expense-tracker-fe43e-default-rtdb.firebaseio.com",
  projectId: "expense-tracker-fe43e",
  storageBucket: "expense-tracker-fe43e.appspot.com",
  messagingSenderId: "391853672087",
  appId: "1:391853672087:web:dfa96e0d74728811c60bd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase();
export const auth = getAuth();