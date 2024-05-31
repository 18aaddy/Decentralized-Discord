import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


export const app = initializeApp({
    apiKey: "AIzaSyAIeFnQOiyTV8Sg9HNjyOE9qE2d0g7ue7E",
    authDomain: "chat-room-b7362.firebaseapp.com",
    projectId: "chat-room-b7362",
    storageBucket: "chat-room-b7362.appspot.com",
    messagingSenderId: "186168541454",
    appId: "1:186168541454:web:4557a3626f2bab291f175f",
    measurementId: "G-TN9W8Z6TRH"
})

export const s_auth = getAuth(app);
export const s_firestore = getFirestore(app);