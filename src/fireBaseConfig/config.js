// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClYCBVAbMkK6MmQ24pf8lgJlbsSciNbY8",
  authDomain: "itss-project-f0636.firebaseapp.com",
  projectId: "itss-project-f0636",
  storageBucket: "itss-project-f0636.appspot.com",
  messagingSenderId: "505459614501",
  appId: "1:505459614501:web:803e07e99175dae3dcb0cc",
  measurementId: "G-7SSKQPVMXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const imageDb = getStorage(app)
