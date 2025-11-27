import React from 'react'

function Fruits() {
const fruits = ["Apple","Banana","Mango","Watermelon","Orange","Pinapple",]

  return (
    <div>
      <ul  className="list-group d-flex justify-content-between align-items-center ">
     {fruits.map((fruit,i)=>{
        return <li className="list-group-item list-group-item-success d-flex justify-content-center w-100" >{fruit}</li>;
     })}</ul>
    </div>
    )}
    


      



export default Fruits
