import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBNGZwHAfb-MZrbyiQ2yla-sTr3jnKtRkA",
  authDomain: "adminverwaltung-51a78.firebaseapp.com",
  projectId: "adminverwaltung-51a78",
  storageBucket: "adminverwaltung-51a78.appspot.com",
  messagingSenderId: "311972820621",
  appId: "1:311972820621:web:9cee0d03d0ea18aa6ed4c4",
  measurementId: "G-9DW70VSDMN"
}

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

export {auth, db, storage};