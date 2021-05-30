import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyB3-3IuerEyxU-bBXPTZWFiQ8M5kTm3w1E",
    authDomain: "chatnovo-76cb5.firebaseapp.com",
    projectId: "chatnovo-76cb5",
    storageBucket: "chatnovo-76cb5.appspot.com",
    messagingSenderId: "16765639682",
    appId: "1:16765639682:web:8f9cc81a170bbf30bf5b1b"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export { auth, provider }
  export default db;