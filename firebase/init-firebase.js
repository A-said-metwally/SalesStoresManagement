// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdFfYQ9M83UjAu9DM3ZvhWhyVtjUjzTls",
  authDomain: "sales-store-management.firebaseapp.com",
  projectId: "sales-store-management",
  storageBucket: "sales-store-management.appspot.com",
  messagingSenderId: "1025984630159",
  appId: "1:1025984630159:web:3fa9af8297ea18c5020ffa",
  measurementId: "G-C6H730HB6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)