
'use client'


import { useParams } from "next/navigation";
import { createContext, useEffect, useRef, useState } from "react";
import { client } from "../../sanity/lib/client";
import { QSingleFaq } from "../../sanity/lib/queries";


export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {

  const [lsuser, lsSetUser] = useState(null)
  const params = useParams()
  const [QAdetail, setQADetail] = useState()  
  const slug = params?.questionAnswerDetail 
  const captcha = useRef(null);

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    lsSetUser(user)
    
    if(slug){
        const fetch = async () => {
            const res = await client.fetch(QSingleFaq, { slug })
            setQADetail(res)
        }
        fetch()
    }
  },[slug])
  
    

   



  return (
    <SettingsContext.Provider
      value={{
         lsuser, lsSetUser, QAdetail, setQADetail,
         captcha
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

