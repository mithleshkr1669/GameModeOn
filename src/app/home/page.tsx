"use client"
import React, { useCallback, useEffect, useMemo, useState } from 'react'

import axios from 'axios'
function Home() {
    const [state, setState] = useState<String>('');
  const [error, setError] = useState<String>('')
  
  // const callBack = useCallback(() => {
  //     axios.get('/api/home').then((res:any) => setState(res.data.msg)).catch((error) => {
  //         console.log("error fetching data :", error)
  //     })
  //   return state
  
  // },[state])

  
  
  useEffect(() => {
    axios.post('/api/home').then((res:any) => setState(res.data.msg)).catch((error) => {
      console.log("error fetching data :", error)
  })
  },[])
  return (
    <div>
          <h1 className='text-white'>This is home page and {state}</h1>
    </div>
  )
}

export default  Home

// export default function Home() {
//   const handleSubmit = async (event) => {
//     event.preventDefault(); 

//     const formData = new FormData(event.target); 

//     try {
//       let response = await fetch('/api/home', {
//         method: 'POST',
//         body: formData,
//       });
//       response = await response.json()
//       alert(`${response.name} ${response.age} ${response.city}`)
//     } catch (error) {
//       // Handle error
//       console.error('Error submitting form:', error);
//     }
//   };

