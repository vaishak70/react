import React from 'react'

function Ary() {
    let array=["a","b","c"]
    console.log(array)
  return (
    <div>Ary
       <h1> {array[0]}</h1>
        {array[1]}
        {array[2]}


    </div>
  )
}

export default Ary