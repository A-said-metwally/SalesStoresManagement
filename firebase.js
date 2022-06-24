import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_Y8VJ5klTfvfNywbRU320AjkhyX215_I",
  authDomain: "ciproject-95659.firebaseapp.com",
  projectId: "ciproject-95659",
  storageBucket: "ciproject-95659.appspot.com",
  messagingSenderId: "326826819742",
  appId: "1:326826819742:web:6069784231dae55606fb8f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)

export const db = getFirestore(app);

