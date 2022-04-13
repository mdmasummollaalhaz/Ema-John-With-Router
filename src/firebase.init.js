// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn2jUsNs-OZR7Rn9XxpWGpzzvrprFMaEk",
  authDomain: "ema-john-simple-38a87.firebaseapp.com",
  projectId: "ema-john-simple-38a87",
  storageBucket: "ema-john-simple-38a87.appspot.com",
  messagingSenderId: "311820999191",
  appId: "1:311820999191:web:7079f7e97da2e9e0215a52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;