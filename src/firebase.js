import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCslCDra67Y-70bCjK4rW-Cb4YxpxD5K4A",
  authDomain: "wiki-recicla.firebaseapp.com",
  projectId: "wiki-recicla",
  storageBucket: "wiki-recicla.firebasestorage.app",
  messagingSenderId: "62707657709",
  appId: "1:62707657709:web:a023b8594c8b2a363dd5e4",
  measurementId: "G-GRSLGMN96F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
