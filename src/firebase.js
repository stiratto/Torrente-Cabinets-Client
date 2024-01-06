// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_jliyFfHdJgJbMQyttWc6Cy-IAf5m2_k",
  authDomain: "torrente-cabinets.firebaseapp.com",
  projectId: "torrente-cabinets",
  storageBucket: "torrente-cabinets.appspot.com",
  messagingSenderId: "221046857181",
  appId: "1:221046857181:web:777777fbdea76a2d9d6a34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
