import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app"; 
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {getDatabase, set, ref} from 'firebase/database'
 

const firebaseConfig = {
    apiKey: "AIzaSyDxqSGvbNRscNdTSM9yOJ5EEw1ydduDXhI",
    authDomain: "app-new-c99df.firebaseapp.com",
    databaseURL: "https://app-new-c99df-default-rtdb.firebaseio.com",
    projectId: "app-new-c99df",
    storageBucket: "app-new-c99df.appspot.com",
    messagingSenderId: "262012771650",
    appId: "1:262012771650:web:f74d5debc9a082f2c0fcdb"
};
const firebaseApp = initializeApp(firebaseConfig)
const FirebaseAuth = getAuth(firebaseApp)
const database = getDatabase(firebaseApp)

const FirebaseContext = createContext(null)
export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = (props) => {

    const signupUserWithEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(FirebaseAuth, email, password)
    }

    const addData=(key, data)=> set(ref(database, key), data)
    return (
        <FirebaseContext.Provider value={{signupUserWithEmailPassword, addData, useFirebase}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}