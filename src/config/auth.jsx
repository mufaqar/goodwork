import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, OAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword} from 'firebase/auth';

const api = {
  init,
  login,
  loginWithGoogle,
  loginWithMicrosoft,
  logout,
  changePassword,
  getUser,
  getAuth,
};
export default api;

const config = {
  apiKey: "AIzaSyDVcRHicQY3tyEX3vf6qrpU4Pk8oe85GMg",
  authDomain: "igoodworksweb.firebaseapp.com",
  projectId: "igoodworksweb",
  storageBucket: "igoodworksweb.appspot.com",
  messagingSenderId: "1036191184084",
  appId: "1:1036191184084:web:bb75195883ea770e16b741",
  measurementId: "G-M7WRCYBKRL"
};

let auth;
const googleProvider = new GoogleAuthProvider();
const microsoftProvider = new OAuthProvider('microsoft.com');
function init(){
  const app = initializeApp(config);
  auth = getAuth(app);
  return app;
}

function login({email, password, displayName}){
  return signInWithEmailAndPassword(auth, email, password, displayName);
}

function loginWithGoogle(){
  return signInWithPopup(auth, googleProvider);
}

function loginWithMicrosoft(){
  return signInWithPopup(auth, microsoftProvider);
}

function logout(){
  return signOut(auth);
}

function changePassword(password){
  return updatePassword(auth.currentUser, password);
}

function getUser(){
  if(!auth){
    return null;
  }

  return auth.currentUser;
}

