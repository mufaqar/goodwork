
'use client'


import { useParams } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";
import { QSingleFaq } from "../../sanity/lib/queries";


export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {

  const [lsuser, lsSetUser] = useState(null)
  const params = useParams()
  const [QAdetail, setQADetail] = useState()  

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    lsSetUser(user)
    
    const slug = params?.questionAnswerDetail 
    if(slug){
        const fetch = async () => {
            const res = await client.fetch(QSingleFaq, { slug })
            setQADetail(res)
        }
        fetch()
    }
  },[])
  
    

   



  return (
    <SettingsContext.Provider
      value={{
         lsuser, lsSetUser, QAdetail, setQADetail
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

