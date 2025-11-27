import React from "react";

function MyComponent(props) {
  console.log(props);
  return (
    <div>
      <h1>Hi my name is {props.name}</h1>
      <h1>My phNo is {props.phNo}</h1>
    </div>
  );
}

export default MyComponent;
