// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCup3vCMWbtGlF45oY_R-FhSJXd11CyvTo",
  authDomain: "demo101-d3b47.firebaseapp.com",
  projectId: "demo101-d3b47",
  storageBucket: "demo101-d3b47.appspot.com",
  messagingSenderId: "928881785356",
  appId: "1:928881785356:web:2ddb48bbc5ad9c0d604c29"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) ; 