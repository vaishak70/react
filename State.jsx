import React, { useState } from 'react'

function State() 
{ 
    const [count, setcount] = useState(0)
    const [arr, setarr] = useState([{name:"adhrsh",no:1,adress:"uhhuhu"},{name:"vishak",no:2,adress:"uhhuhu"}])
    console.log(count)
    console.log(arr)

  return (
    arr.map((Data)=>
    <div>


    <h1>{count}</h1>
    <button onClick={()=>setcount(count+1)}>+</button>
    
    <button onClick={()=>setcount(count-1)}>-</button>
    <h3>{Data.no}</h3>
    <h1>{Data.name}</h1>
    <h3>{Data.adress}</h3>
    
    </div>
    )
  
  )
}

export default State