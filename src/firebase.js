import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAuPqFDw_lnNu43hDz9z1E5eBacTkZRbiI",
    authDomain: "linkedin-clone-15974.firebaseapp.com",
    projectId: "linkedin-clone-15974",
    storageBucket: "linkedin-clone-15974.appspot.com",
    messagingSenderId: "699369230611",
    appId: "1:699369230611:web:a9926b4acd7b1edb470ae6",
    measurementId: "G-WW24FHYWM9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }