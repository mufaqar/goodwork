
'use client'

import { auth } from "@/config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";


export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {

    const [user, setUser] = useState(null)
  
    useEffect(() => {
      // Check if the user is already authenticated
      const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
          setUser(authUser);
          // Check the token's expiration time (optional)
          // const expirationTime = new Date().getTime() + 3600 * 1000; // 1 hour
          // localStorage.setItem('tokenExpiration', expirationTime);

          // const tokenExpirationTime = JSON.parse(localStorage.getItem('tokenExpiration'))
          // console.log("🚀 ~ file: setting-context.jsx:27 ~ unsubscribe ~ tokenExpirationTime:", tokenExpirationTime)
          // const isExpired = tokenExpirationTime ? authUser.metadata.a : null;

          // console.log("🚀 ~ file: setting-context.jsx:22 ~ unsubscribe ~ tokenExpirationTime:", tokenExpirationTime)
          // if (tokenExpirationTime) {
          //   const currentTime = new Date().getTime();
          //   setTokenValid(currentTime < tokenExpirationTime);
          // } else {
          //   setTokenValid(false); // No expiration time, consider it invalid
          // }
        } else {
          setUser(null);
        }
      });
  
      return () => unsubscribe(); // Unsubscribe when the component unmounts
    }, []);


  
  
  
  



  return (
    <SettingsContext.Provider
      value={{
        user, setUser
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

