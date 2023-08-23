import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAB8nExNRWktdi2VNkOBzBVbLxNYyxxPk",
  authDomain: "igoodwork-efed3.firebaseapp.com",
  projectId: "igoodwork-efed3",
  storageBucket: "igoodwork-efed3.appspot.com",
  messagingSenderId: "921697898225",
  appId: "1:921697898225:web:6b9998b883974aa5176350"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth  = getAuth(app)
