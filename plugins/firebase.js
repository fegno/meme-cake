import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCx66oEB3xU9ixw1xdzvGPqqafU2yYqBSo",
  authDomain: "memecake-a3911.firebaseapp.com",
  projectId: "memecake-a3911",
  storageBucket: "memecake-a3911.appspot.com",
  messagingSenderId: "122821547295",
  appId: "1:122821547295:web:71a07650423105a2e4cc2a",
  measurementId: "G-HJXQDYLPQL",
};
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth( firebaseApp );
