// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW22zBeTNf52uGZnowjdO9kcDeevosZ1U",
  authDomain: "to-do-list-22d5a.firebaseapp.com",
  projectId: "to-do-list-22d5a",
  storageBucket: "to-do-list-22d5a.appspot.com",
  messagingSenderId: "581941455129",
  appId: "1:581941455129:web:909aef4546a0feaeda3d88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth