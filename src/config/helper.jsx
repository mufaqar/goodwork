import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '@/config/firebase'




// export const login = async ({ email, password }) => {
//      await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
//           const user = userCredential.user;
//           window.location.href = "/";
//      }).catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//      });
// }

// export const loginWithGoogle = async () => {
//      const googleProvider = new GoogleAuthProvider();
//      const user = await signInWithPopup(auth, googleProvider);
// }


export const loginWithMicrosoft = () => {
     const microsoftProvider = new OAuthProvider('microsoft.com');
     const user = signInWithPopup(auth, microsoftProvider);
}

// export const logout = async () => {
//      signOut(auth);
// }

export const getUserInfo = () => {
     const saved = localStorage.getItem("user");
     const initialValue = JSON.parse(saved);
}