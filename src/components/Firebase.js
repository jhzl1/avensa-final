import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDMd9LlbTOMoyzmQ7qKZWWZurTJEJyFDdQ",
  authDomain: "avensa-828db.firebaseapp.com",
  projectId: "avensa-828db",
  storageBucket: "avensa-828db.appspot.com",
  messagingSenderId: "613228255323",
  appId: "1:613228255323:web:77fd5db5868b08498ac77e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };
