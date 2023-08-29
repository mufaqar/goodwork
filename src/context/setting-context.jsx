
'use client'

import { auth } from "@/config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { useRouter, usePathname } from 'next/navigation'


export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [lsuser, lsSetUser] = useState(null)
    const router = useRouter()
    const pathname = usePathname()

  
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    lsSetUser(user)
    if(user?.apiKey?.length > 10){
      pathname === '/register' || pathname === '/login' && router.push('/')
    }
  })
  
  



  return (
    <SettingsContext.Provider
      value={{
        user, setUser, lsuser, lsSetUser
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

