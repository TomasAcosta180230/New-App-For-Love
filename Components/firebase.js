
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyA3ILxNZbfTXazuKmhe-3uwZjP5UM_P5kg",
  authDomain: "loveapp-82dfb.firebaseapp.com",
  projectId: "loveapp-82dfb",
  storageBucket: "loveapp-82dfb.appspot.com",
  messagingSenderId: "798109194541",
  appId: "1:798109194541:web:0414e0b008d2aa52e39ba4",
  measurementId: "G-E8WSRRR0XF",
  databaseURL: "https://loveapp-82dfb-default-rtdb.firebaseio.com"
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();