
'use client'


import { createContext, useEffect, useState } from "react";


export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {

  const [lsuser, lsSetUser] = useState(null)

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    lsSetUser(user)
  },[])
  
  



  return (
    <SettingsContext.Provider
      value={{
         lsuser, lsSetUser
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

