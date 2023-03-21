import React from 'react'

function Array() {
    let arr =["asd","asf","asg"]
    console.log(arr)
  return (
    <div>
        <h1>{arr[0]}</h1>
        <h1>{arr[1]}</h1>
        <h1>{arr[2]}</h1>
    </div>
  )
}

export default Array