import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAlfETh-oqfzcEhcXpuIaTT60gnfhXu4Ec",
    authDomain: "morphe-cb6fc.firebaseapp.com",
    projectId: "morphe-cb6fc",
    storageBucket: "morphe-cb6fc.appspot.com",
    messagingSenderId: "1061306982532",
    appId: "1:1061306982532:web:80039f4a203f12b8d4a2d1",
    measurementId: "G-HH9D6LZB4D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);


  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };