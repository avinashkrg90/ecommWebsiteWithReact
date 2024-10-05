// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgvJKnORCxDWdGDgUhFFuigNUYwbH5b3Y",
  authDomain: "busybuyauthentication.firebaseapp.com",
  projectId: "busybuyauthentication",
  storageBucket: "busybuyauthentication.appspot.com",
  messagingSenderId: "1034982978453",
  appId: "1:1034982978453:web:ea1693531660b6bbfd3c9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;