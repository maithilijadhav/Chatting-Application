import '../App.css'
import React, {useState,useEffect} from 'react'
import {firebase,auth,db} from '../firebase.js'
//import {collection,onSnapshot} from 'firebase/firestore'

function SignOut() {
    return (
        <div style={{
            position:'relative',top:'-450px',right:'-800px'
        }}>
        <button onClick={() => auth.signOut()}>Sign Out!</button>
        </div>
    )
}

function Chat()
{
    const [messages, setMessages] = useState([])
    //if anything inside the array of useState changes the useEffect will update accordingly
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(100).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return(
        <div>
            <SignOut/>
            <div className='msgs'>
                {messages.map(({ id, text,photoURL,uid}) => (
                <div>
                    <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                        <img src={photoURL} alt="" />
                        <p>{text}</p>
                    </div>
                </div>
                ))}
            </div>
            <SendMessage/>
        </div>
    )
}

function SendMessage(){
    const [message,setMessage] = useState('')

    async function sendMsg(e){
        //page does not refresh if send message is pressed
        e.preventDefault()
        const {uid,photoURL} = auth.currentUser

        await db.collection('messages').add({
            text:message,
            uid,
            photoURL,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMessage('')
    }
    return(
        <textbox>
            <form onSubmit={sendMsg}>
                <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Start Typing..."></input>
                <button1 type='submit' onClick={sendMsg}>Send</button1>
            </form>
        </textbox>
    )
}

export default Chat;