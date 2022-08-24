import './App.css';
import React from 'react'
import {firebase,auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from './components/Chat.js'

// if user has logged in show chat else signin
function App() {
  const [user] = useAuthState(auth) //returns true if signed in
  return (
    <>
    {user ? <Chat /> : <SignIn />}  

    </>
  );
}

function SignIn() {
  //connecting button to the google authentication
  const SignInWithGoogle =()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
  }
  return(
    <>
    <button onClick={SignInWithGoogle}>Sign In With Google!</button> 
    <h1>Start Chatting!</h1>
    </>
  )
}



export default App;
