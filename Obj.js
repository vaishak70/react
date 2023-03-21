import React from 'react'
import './Obj.css';
function Obj() {
    const a=[{id:1,name:" men watch",price:2000,Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCxwArJ_i99Q12ZCXzstmdglBK94P1uj-eWw&usqp=CAU",brand:"g-shock"},
    {id:2,name:"book",price:2000,Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rI_tn3BpM-qwJC7iEu1ntsQtAN4ZDteE4g&usqp=CAU",brand:"oscar"},
    {id:3,name:"shoes",price:2000,Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rI_tn3BpM-qwJC7iEu1ntsQtAN4ZDteE4g&usqp=CAU",brand:"nike"},
    {id:4,name:"book",price:2000,Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rI_tn3BpM-qwJC7iEu1ntsQtAN4ZDteE4g&usqp=CAU",brand:"oscar"},
    {id:5,name:"book",price:2000,Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rI_tn3BpM-qwJC7iEu1ntsQtAN4ZDteE4g&usqp=CAU",brand:"oscar"},
    {id:6,name:"book",price:2000,Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rI_tn3BpM-qwJC7iEu1ntsQtAN4ZDteE4g&usqp=CAU",brand:"oscar"},

  ]
    console.log(a)
  return (
    a.map((data)=>
    <div className='s'>
    <div className="card" >
        <img src={data.Image} />
  <div className="card-body" >
    <h5 className="card-title">brand {data.brand}</h5>
    <p className="card-text"> Gute Mens Watches, Mechanical Skeleton Stainless Steel Waterproof
     </p>
    
    <h5>{data.name}</h5>
    <h5>{data.price}</h5>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    
          
   

    </div>

  </div>
  </div>
  )
  )
  
}

export default Obj