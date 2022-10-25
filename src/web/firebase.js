// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeovSKgJhtCZKOrNkU2GJbgb_ELl-Or2k",
  authDomain: "urgent-rishta-18cc7.firebaseapp.com",
  projectId: "urgent-rishta-18cc7",
  storageBucket: "urgent-rishta-18cc7.appspot.com",
  messagingSenderId: "693261439051",
  appId: "1:693261439051:web:2ffaae7d8b5648dbf7fdce"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
