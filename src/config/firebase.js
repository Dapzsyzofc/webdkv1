import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCMw88IUR4jXbWmz9TGHiyfFhfy0iB3fmQ",
  authDomain: "database-class-be76a.firebaseapp.com",
  projectId: "database-class-be76a",
  storageBucket: "database-class-be76a.firebasestorage.app",
  messagingSenderId: "426827414725",
  appId: "1:426827414725:web:a578f4201a44919a8804ac",
  measurementId: "G-4PN6KGE14Z",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
