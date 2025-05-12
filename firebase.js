// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA9GrePZpnqEtOTjqoHMPj3zDyI5567VTQ",
  authDomain: "quiz-app-afd34.firebaseapp.com",
  projectId: "quiz-app-afd34",
  storageBucket: "quiz-app-afd34.firebasestorage.app",
  messagingSenderId: "905366263140",
  appId: "1:905366263140:web:c5aa7cc8e5b04524b61671",
  measurementId: "G-Z2NT2M5P7Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
