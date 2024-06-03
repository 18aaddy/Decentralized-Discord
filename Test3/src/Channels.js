import React, { useRef, useEffect, useState } from 'react';
import "./App.css";
import OffcanvasNavbar from './components/offCanvasNavbar';
import { format } from 'date-fns';

//// Firebase Imports ////
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { s_auth, s_firestore } from "./config/firebase";
import { Timestamp, query, orderBy, limit, addDoc, collection } from "firebase/firestore";



const messagesRef = collection(s_firestore, 'messagesGeneral');


function SignOut() {
    return s_auth.currentUser && (
        <button onClick={() => s_auth.signOut()}>Sign Out</button>
    )
}


////////////////////////
////  Chat Room    /////
////////////////////////

// function ChatRoom() {
//     // console.log("Okay?")
//     const q = query(messagesRef, orderBy("createdAt", "desc"), limit(25));
//     // console.log("Okay2?")

//     const [messages] = useCollectionData(q, { idField: 'id' });
//     // console.log("Okay3?")

//     const sortedMessages = messages ? [...messages].reverse() : [];

//     return (
//         <>
//             <NavBar />
//             <SideBar />
//             <div className='chat-room'>
//                 {sortedMessages && sortedMessages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
//             </div>

//             <AddChatMessage />

//             <div>
//                 <br></br>
//                 <SignOut />
//             </div>
//         </>
//     )
// }




function ChatRoomGeneral() {
  const q = query(messagesRef, orderBy("createdAt", "desc"), limit(25));
  const [messages] = useCollectionData(q, { idField: 'id' });

  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const sortedMessages = messages ? [...messages].reverse() : [];

  return (
    <>
      <OffcanvasNavbar />
      <div className="message-container">
        {sortedMessages && sortedMessages.map(msg => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        <div ref={bottomRef} />
      </div>
      <AddChatMessage />
      <div>
        <br />
        <SignOut />
      </div>
    </>
  );
}


function ChatMessage({ message }) {
  const [user] = useAuthState(s_auth);
  const { text, uid, createdAt } = message;
  const photoUrl = s_auth.currentUser.photoURL || ''; 
  
  const timestamp = createdAt ? format(createdAt.toDate(), 'dd/MM, hh:mm a') : '';

  return (
    <div className={`message ${uid === user?.uid ? 'sent' : 'received'}`}>
      {/* {photoUrl && <img src={photoUrl} alt="User Profile" />} */}
      <p>{text}</p>
      {timestamp && <span className="timestamp">{timestamp}</span>}
    </div>
  );
}




// function ChatMessage(props) {
//     const [user, ,] = useAuthState(s_auth);
//     const { text, uid } = props.message;
//     // const photoUrl = getDocs({ uid: uid }).PhotoURL;

//     return (
//         <>
//             <p key={props?.key}>{text}</p>
//             {/* {photoUrl && (text != "") ? <img src={photoUrl} alt="User Profile" /> : null} */}
//         </>
//     )
// }


function AddChatMessage() {
    function FormButton() {
        const [messageText, setMessageText] = useState("");
        const userId = s_auth?.currentUser?.uid;

        const submitMessage = async (messageText, userId) => {
            
          if (messageText != "") {
            try {
              addDoc(messagesRef, {
                  text: messageText,
                  createdAt: Timestamp.now(),
                  uid: userId
              });
              setMessageText("");
            } catch (e) {
              console.error(e);
            }
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
            <>
                <div class="input-group">
                    <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" placeholder="Write Message..." onChange={(e) => setMessageText(e.target.value)} onKeyDown={(e) => { handleKeyDown(e, messageText, userId); }} />
                    <button type="button" class="btn btn-outline-secondary" onClick={() => { submitMessage(messageText, userId) }}>Send</button>
                    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                </div>
            </>
        )
    }

    return (
        <div>
            <FormButton />
        </div >
    )
}

export default ChatRoomGeneral;