import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBoa2mpFFS7jOZYuOMbWoXP3bGVuSD_Sc",
  authDomain: "pizzaypostre-1f1c2.firebaseapp.com",
  projectId: "pizzaypostre-1f1c2",
  storageBucket: "pizzaypostre-1f1c2.appspot.com",
  messagingSenderId: "304118457861",
  appId: "1:304118457861:web:66dc83b44a907fd00c5e6c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
