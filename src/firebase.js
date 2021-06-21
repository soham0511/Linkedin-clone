import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "X",
    authDomain: "X",
    projectId: "X",
    storageBucket: "X",
    messagingSenderId: "X",
    appId: "X:X:X:X",
    measurementId: "X"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
