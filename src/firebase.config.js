import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwmlEcq1CsRZtOFHRKqvumRX6Xnp6ZFnM",
  authDomain: "nook-nexus.firebaseapp.com",
  projectId: "nook-nexus",
  storageBucket: "nook-nexus.appspot.com",
  messagingSenderId: "1095431040216",
  appId: "1:1095431040216:web:0428e329328fd3af05fbad",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
