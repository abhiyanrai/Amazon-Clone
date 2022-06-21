import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA-cP-BM0R8gotUockNseftvPhM6ecuo-Q",
    authDomain: "clone-cd77e.firebaseapp.com",
    projectId: "clone-cd77e",
    storageBucket: "clone-cd77e.appspot.com",
    messagingSenderId: "666239388015",
    appId: "1:666239388015:web:5a71d8077f34cb7de8809a"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const auth = getAuth();

  export { firebaseApp, auth };