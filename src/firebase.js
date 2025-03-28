// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getDatabase, ref } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPoO3Nthe2N6WHmML0K_7VYjH1FeLYgUg",
  authDomain: "psychologists-cac08.firebaseapp.com",
  projectId: "psychologists-cac08",
  storageBucket: "psychologists-cac08.firebasestorage.app",
  messagingSenderId: "164158940940",
  appId: "1:164158940940:web:484f0facc40bbf5093cb29",
  measurementId: "G-NVGZG2H187"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const database = getDatabase(app);

const dbRef = ref(getDatabase());
//To read or write data from the database, you need an instance of firebase.database.Reference:


export { database , dbRef};


