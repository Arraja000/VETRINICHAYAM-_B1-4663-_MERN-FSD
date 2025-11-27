import React, {useState} from 'react'

function Colour() {
const [color, setColor] = useState("black");
  const handleChange = (e) => {
    setColor(e.target.value);

  }

  return (
    <div className="container text-center mt-5 ">
      <input className="w-50" type="color" onChange={handleChange}/><br></br>
     <div className="container text-center "style={{height:"200px", width:"200px", backgroundColor:color}}></div>


    </div>
  )
}

export default Colour
