import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjtf0_wFXOqPZa_KQ-Zn3qPaADobu5yvg",
  authDomain: "first-todo-900.firebaseapp.com",
  projectId: "first-todo-900",
  storageBucket: "first-todo-900.appspot.com",
  messagingSenderId: "401755099781",
  appId: "1:401755099781:web:677021f6caba7b67f4cfec",
  measurementId: "G-G938S77HE9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
