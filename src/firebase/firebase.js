import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjR-zdn_fXMr-Db9_q0YuoAz1qaNAGkyQ",
  authDomain: "linney-db.firebaseapp.com",
  projectId: "linney-db",
  storageBucket: "linney-db.appspot.com",
  messagingSenderId: "815507903093",
  appId: "1:815507903093:web:879e15393ce47b83509e3c",
  measurementId: "G-903NSSJZCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();