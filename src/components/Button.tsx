'use client'
import { useRouter } from "next/navigation"
function Button({ result }: { result: boolean }) {
  
  const router = useRouter();

  function handleClick() {
    if (result) {
       router.push('/home') 
      }
        
    }
  return (
      <div>
          
          <button onClick={handleClick } className="text-white">sign out</button>
      
    </div>
  )
}

export default Button
