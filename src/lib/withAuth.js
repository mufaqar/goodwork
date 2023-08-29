// utils/withAuth.js
import { useEffect } from "react";
import { useRouter, usePathname } from 'next/navigation'


export function withAuth(WrappedComponent) {
  return function WithAuth(props) {

     const router = useRouter()
     const pathname = usePathname()

     useEffect(()=>{
          const user = JSON.parse(localStorage.getItem('user'))
          if(user?.apiKey){
            pathname === '/register' || pathname === '/login' && router.push('/')
          }
        },[])

    return <WrappedComponent {...props} />;
  };
}
