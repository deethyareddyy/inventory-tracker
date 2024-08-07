// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdrj4h3o8ugpWUcEVyzitIphu5DkpYcsw",
  authDomain: "pantryapp-1fdce.firebaseapp.com",
  projectId: "pantryapp-1fdce",
  storageBucket: "pantryapp-1fdce.appspot.com",
  messagingSenderId: "960542787782",
  appId: "1:960542787782:web:752253c6ba79ed9d2eafc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export{firestore}