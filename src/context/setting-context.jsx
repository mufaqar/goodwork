
'use client'


import { useParams, usePathname, useRouter } from "next/navigation";
import { createContext, useEffect, useRef, useState } from "react";
import { client } from "../../sanity/lib/client";
import { QSingleFaq } from "../../sanity/lib/queries";
import { auth } from "@/config/firebase";


export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {

  const [lsuser, lsSetUser] = useState(null)
  const [QAdetail, setQADetail] = useState()  
  const [pathList, setPathList] = useState([])

  const params = useParams()
  const slug = params?.questionAnswerDetail 
  const captcha = useRef(null);
  const router = useRouter()
  const currentPathname = usePathname()

  useEffect(()=>{
    // const user = JSON.parse(localStorage.getItem('user'))
    // lsSetUser(user)
    if(slug){
        const fetch = async () => {
            const res = await client.fetch(QSingleFaq, { slug })
            setQADetail(res)
        }
        fetch()
    }
  },[slug])
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // if (!user || !user.emailVerified) {
      //   router.push('/login');
      // }
      lsSetUser(user)
    });
    return () => unsubscribe();
  }, [router]);
    

  useEffect(()=>{
    setPathList([...pathList, currentPathname])
    const p  = pathList.find((item,idx) => idx+1 === pathList.length)
    sessionStorage.setItem('previousPath', p)
  },[currentPathname])
   



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

