import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCq85wqBLjWfOhmnwbTQRYQLN_VtqWwgWs",
  authDomain: "react-notes-4263f.firebaseapp.com",
  projectId: "react-notes-4263f",
  storageBucket: "react-notes-4263f.appspot.com",
  messagingSenderId: "441437960489",
  appId: "1:441437960489:web:1be2b12a15190977fc9f38"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");


