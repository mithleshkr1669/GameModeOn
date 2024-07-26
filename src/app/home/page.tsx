
// import React from 'react'
import { cookies } from "next/headers";
import Button from "@/components/Button";

const Home:React.FC=()=> {
  const cookiesStore = cookies();
  cookiesStore.delete('name');
  const result=cookiesStore.has('name')

  return (
    <div>
      <h1 className='text-white'>This is home page</h1>
      <Button result={result} />
    </div>
  )
}

export default Home
