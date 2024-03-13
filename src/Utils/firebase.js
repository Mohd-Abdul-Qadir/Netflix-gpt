// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfemgFbnJKZkwVrG280JOi2DEKShYX2OA",
  authDomain: "netflixgpt-6626d.firebaseapp.com",
  projectId: "netflixgpt-6626d",
  storageBucket: "netflixgpt-6626d.appspot.com",
  messagingSenderId: "1023531144632",
  appId: "1:1023531144632:web:3e3cca4253951d91dbeb4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
