// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4wTVkawX3LURlPgah-zh6XePVlcS-Mb4",
  authDomain: "ema-john-simple-e-commerce.firebaseapp.com",
  projectId: "ema-john-simple-e-commerce",
  storageBucket: "ema-john-simple-e-commerce.appspot.com",
  messagingSenderId: "326337616984",
  appId: "1:326337616984:web:25ab89add79aea7b6bfe2d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
