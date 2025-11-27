import React from 'react'

function Events(){
           const handleclick = () =>
    {
        console.log("I Got Clicked")
    };

const handlechange=(e)=>{
    console.log(e.target.value)
}


return(
<div className=''>
<button className="btn btn-secondary mt-5 mx-5" onClick={handleclick}>Click Mee</button>

<div className="input-group mb-3 w-25 mt-3 mx-5">
    <input type="text"
    className="from-control"
    aria-label="Recipient username"
    aria-describedby="basic-addon2"
    onChange={handlechange}/>


</div>
</div>

)
}

export default Events
