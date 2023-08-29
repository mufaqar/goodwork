
'use client'

import { auth } from "@/config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { Router } from 'next/router'



export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  //   const router = useRouter()

  //   console.log("🚀 ~ file: setting-context.jsx:9 ~ Router:", Router)

  
  // useEffect(()=>{
  //   const token = localStorage.getItem('authToken')
  //   Router.events.on("routeChangeStart", (url) => {
  //     console.log('########')
  //   });
  //   if(token){
  //     location.pathname === '/register' || location.pathname === '/login' && router.push('/')
  //   }
  // })
  
  



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

