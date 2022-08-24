import './App.css';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//linking firebase to the project
const firebaseConfig = {
    apiKey: "AIzaSyAn9shKhg-Qxt9fCoaBhFsZ0IF5bGrGNlw",
    authDomain: "chat-16883.firebaseapp.com",
    projectId: "chat-16883",
    storageBucket: "chat-16883.appspot.com",
    messagingSenderId: "324016657122",
    appId: "1:324016657122:web:e5900dd20f0133c12a04bb",
    measurementId: "G-3DXW5DTD8X"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore() //accessing firebase database
const auth = firebase.auth() //accessing firebase authenttication
export {firebase,db,auth} //exporting 