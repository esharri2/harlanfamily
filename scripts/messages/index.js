import initPostMessage from "./post-form";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrMfODbWgtqidzUNEMYTwn74BNNYEI5rI",
  authDomain: "harlan-dev.firebaseapp.com",
  projectId: "harlan-dev",
  storageBucket: "harlan-dev.appspot.com",
  messagingSenderId: "810519112340",
  appId: "1:810519112340:web:22eb075e44da78521a6281",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

initPostMessage();
