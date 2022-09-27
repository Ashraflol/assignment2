// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBKo9aB6Q_SGYjaMMeittW3V9Kda95mYg",
  authDomain: "fir-auth-article-87cb9.firebaseapp.com",
  projectId: "fir-auth-article-87cb9",
  storageBucket: "fir-auth-article-87cb9.appspot.com",
  messagingSenderId: "132757359534",
  appId: "1:132757359534:web:ccdbeec22525ee7d94963f",
  measurementId: "G-SG51C3KDYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// const auth = getAuth();
// // createUserWithEmailAndPassword(auth, email, password)
// createUserWithEmailAndPassword(auth, 'email@gmail.com', 'password123')
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//     console.log(user)
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//     console.log(errorCode,errorMessage)
//   });

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });