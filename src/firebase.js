import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCidBjI7jNSiQrx9lgxqh8gklzU7Vtvyko",
    authDomain: "clone-d7366.firebaseapp.com",
    projectId: "clone-d7366",
    storageBucket: "clone-d7366.appspot.com",
    messagingSenderId: "247236215556",
    appId: "1:247236215556:web:d3b56fc241aa7383510651"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth=getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);


  export {db,auth};