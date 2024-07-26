// "use client"
import { LoginForm } from "@/components/LoginForm";
// import {useRouter} from "next/navigation";
import { cookies } from "next/headers";
import Redirects from "@/components/Redirects";



export default function Home() {
  
  const cookiesStore = cookies();
  const hasCookie = cookiesStore.has('name')
  return (
    <main className="flex min-h-screen flex-col items-center bg-black">
      
      {/* {value ? router.push('/home') : <LoginForm></LoginForm>} */}
     {hasCookie?<Redirects></Redirects>:<LoginForm></LoginForm>} 
    </main>
  );
}