import React, { useState } from 'react'
import './Task.css';
function Task() {
    const [count, setcount] = useState(0)
    console.log(count)
   
  return (
    
    <div className='a'> 
    <div className="card mb-3" >
  <div className="row g-0">
    <div class="col-md-4">
    <img src="https://th.bing.com/th/id/OIP.s9JFNLzEbjoZhjijeA5X-AHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="img-thumbnail" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        <div className='b'>
        <button onClick={ ()=>setcount(count+1)}>+</button>
        {count}        
        <button onClick={ ()=>setcount(count-1)}>-</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

   
    
  )
}

export default Task