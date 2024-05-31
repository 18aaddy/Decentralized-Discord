import { useState, useEffect } from 'react';
import "./App.css";

//// Firebase Imports ////
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { s_auth, s_firestore } from "./config/firebase";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { Timestamp, collection, query, orderBy, limit, addDoc, getDocs } from "firebase/firestore";


const messagesRef = collection(s_firestore, 'messages');

const googleProvider = new GoogleAuthProvider();


function App() {

  const [messagesList, setMessagesList] = useState([]);

  // const getMessageList = async () => {
  //   try {
  //     const data = await getDocs(messagesRef);
  //     const filteredData = data.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id
  //     }));
  //     setMessagesList(filteredData);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  // useEffect(() => { getMessageList(); }, []);

  const [user, ,] = useAuthState(s_auth);

  return (
    <div className="App">
      <header>

      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}


function SignIn() {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(s_auth, googleProvider);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <button onClick={signInWithGoogle}>Sign In With Google</button>
  )
}


function SignOut() {
  return s_auth.currentUser && (
    <button onClick={() => s_auth.signOut()}>Sign Out</button>
  )
}


function ChatRoom() {

  const q = query(messagesRef, orderBy("createdAt", "desc"), limit(25));

  const [messages] = useCollectionData(q, { idField: 'id' });

  const sortedMessages = messages ? [...messages].reverse() : [];

  return (
    <>
      <div>
        {sortedMessages && sortedMessages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      </div>

      <AddChatMessage />

      <div>
        <br></br>
        <SignOut />
      </div>
    </>
  )
}


function ChatMessage(props) {
  const [user, ,] = useAuthState(s_auth);
  const { text, uid } = props.message;
  const photoUrl = getDocs({ uid: uid }).PhotoURL;

  return (
    <>
      <p>{text}</p>
      {photoUrl && (text != "") ? <img src={photoUrl} alt="User Profile" /> : null}
    </>
  )
}


function AddChatMessage() {
  const [messageText, setMessageText] = useState("");
  const userId = s_auth?.currentUser?.uid;

  const submitMessage = async (messageText, userId) => {
    try {
      addDoc(messagesRef, {
        text: messageText,
        createdAt: Timestamp.now(),
        uid: userId,
        PhotoURL: s_auth?.currentUser?.photoURL
      });
      setMessageText("");

    } catch (e) {
      console.error(e);
    }
  }

  const handleKeyDown = (e, msg, uid) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submitMessage(msg, uid);
      e.target.value = "";
    }
  };

  return (
    <div>
      <input placeholder='Write message...' type='text' onChange={(e) => setMessageText(e.target.value)} onKeyDown={(e) => { handleKeyDown(e, messageText, userId); }}></input>
      <button onClick={() => { submitMessage(messageText, userId) }}>Submit</button>
    </div >
  )
}


export default App;
