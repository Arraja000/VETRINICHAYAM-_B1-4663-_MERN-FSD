import React, { useState } from "react";

function Case() {
  const [text, setText] = useState("");
  const handleChange = (i) => {
    setText(i.target.value);
  };

  const Low = () => {
    setText(text.toLowerCase());
  };
  const Up = () => {
    setText(text.toUpperCase());
  };
  const Ret = () => {
    setText("");
  };
  console.log(text);
  return (
    <div className="container d-flex flex-column align-item-center mt-3">
      <h2>{text}</h2>
      <input type="text" onChange={handleChange} />
      <br></br>
      <button type="button" className="btn btn-danger " onClick={Low}>
        LowerCase
      </button>
      <br></br>
      <button type="button" className="btn btn-warning " onClick={Up}>
        Uppercase
      </button>
      <br></br>
      <button type="button" className="btn btn-success " onClick={Ret}>
        Reset
      </button>
    </div>
  );
}

export default Case;
