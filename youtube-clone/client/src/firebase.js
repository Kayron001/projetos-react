import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "apiKey to firebase",
    authDomain: "tubevideo-59547.firebaseapp.com",
    projectId: "tubevideo-59547",
    storageBucket: "tubevideo-59547.appspot.com",
    messagingSenderId: "653227851123",
    appId: "1:653227851123:web:f3e14404b86477567b1906"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app