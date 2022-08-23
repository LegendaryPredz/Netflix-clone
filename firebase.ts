// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPnD1vQm4-IvmlaqReiNJXXmw19fIJXdk",
  authDomain: "netflix-clone-b7059.firebaseapp.com",
  projectId: "netflix-clone-b7059",
  storageBucket: "netflix-clone-b7059.appspot.com",
  messagingSenderId: "242771928689",
  appId: "1:242771928689:web:a96a99715e82cd0bdb9dd0",
  measurementId: "G-DNK7W8VR8L"
};

// Initialize Firebase 
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
