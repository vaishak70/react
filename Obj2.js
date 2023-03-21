import React from 'react'

function Obj2() 
    {
        const a=[{id:1,name:"watch",price:2000,Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rI_tn3BpM-qwJC7iEu1ntsQtAN4ZDteE4g&usqp=CAU"},
        {id:2,name:"book",price:"kwhs",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rI_tn3BpM-qwJC7iEu1ntsQtAN4ZDteE4g&usqp=CAU"}]
        console.log(a)
  return (
    a.map((data)=>
    <div class="card" >
          <img src={data.Image} class="card-img-top" alt="..."  />

  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>




  )
  )
  
}

export default Obj2