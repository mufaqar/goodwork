import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVcRHicQY3tyEX3vf6qrpU4Pk8oe85GMg",
  authDomain: "igoodworksweb.firebaseapp.com",
  projectId: "igoodworksweb",
  storageBucket: "igoodworksweb.appspot.com",
  messagingSenderId: "1036191184084",
  appId: "1:1036191184084:web:bb75195883ea770e16b741",
  measurementId: "G-M7WRCYBKRL"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app)
