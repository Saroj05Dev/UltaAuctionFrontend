import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANkUopLq1D7Ofpz7nuqvYvLoASUjeKTY0",
  authDomain: "taskflow-otp.firebaseapp.com",
  projectId: "taskflow-otp",
  storageBucket: "taskflow-otp.firebasestorage.app",
  messagingSenderId: "55950255054",
  appId: "1:55950255054:web:9a1dd16da19d203fb1819f",
  measurementId: "G-P6VD67BSW9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);