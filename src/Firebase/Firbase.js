import { initializeApp } from "firebase/app"; 


const firebaseConfig = {
    apiKey: "AIzaSyDxqSGvbNRscNdTSM9yOJ5EEw1ydduDXhI",
    authDomain: "app-new-c99df.firebaseapp.com",
    databaseURL: "https://app-new-c99df-default-rtdb.firebaseio.com",  
    projectId: "app-new-c99df",
    storageBucket: "app-new-c99df.appspot.com",
    messagingSenderId: "262012771650",
    appId: "1:262012771650:web:f74d5debc9a082f2c0fcdb"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  