import React from "react";

function Mydata(props) {
  console.log(props);
  return (
    <div>
      <h3>Name: {props.N1}</h3>
      <p>Age:{props.A1}</p>
      <p> Bio: {props.B1}</p>
      
    </div>
  );
}

export default Mydata;
