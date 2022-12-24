import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';  //Importing firebase from the firebase we just installed using npm add firebase


const firebaseConfig = {
    apiKey: "AIzaSyAWa4QzlmCZ83tnh96ccTSGKM9gT9wghcs",
    authDomain: "linkedin-clone-cd2ef.firebaseapp.com",
    projectId: "linkedin-clone-cd2ef",
    storageBucket: "linkedin-clone-cd2ef.appspot.com",
    messagingSenderId: "1011679866631",
    appId: "1:1011679866631:web:14f71490e2fcca74f25fa2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);  //connecting firebase to your project
const db = firebaseApp.firestore();    //using database of firebase that is called firestore
const auth = firebase.auth();          //using authorization feature of firebase

export default firebase;
export {db,auth};

