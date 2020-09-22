import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC93zG2ueXvTQaMjIKfUcNIgIxs_HSd5mo",
    authDomain: "tinder-clone-59436.firebaseapp.com",
    databaseURL: "https://tinder-clone-59436.firebaseio.com",
    projectId: "tinder-clone-59436",
    storageBucket: "tinder-clone-59436.appspot.com",
    messagingSenderId: "1016484854451",
    appId: "1:1016484854451:web:c49c0c658d4e9b83698ec6",
    measurementId: "G-NXQHZBXL1L"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const database=firebaseApp.firestore();
  export default database;