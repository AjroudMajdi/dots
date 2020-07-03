import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAPbLmL-ZNUq9WaKiySoInSkdbgkTNjLIc",
  authDomain: "dots-52a53.firebaseapp.com",
  databaseURL: "https://dots-52a53.firebaseio.com",
  projectId: "dots-52a53",
  storageBucket: "dots-52a53.appspot.com",
  messagingSenderId: "459449204797",
  appId: "1:459449204797:web:eff950d3037e5ded7eaa54",
  measurementId: "G-8BQZNZ4DFB",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
