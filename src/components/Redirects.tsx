"use client"
import { useRouter } from "next/navigation"
function Redirects(){
    const router=useRouter()
    router.push('/home')
     return <></>
  
}

export default Redirects;
