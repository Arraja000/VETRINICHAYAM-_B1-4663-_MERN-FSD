import React from "react";

function Fruits() {
  const fruits = ["Apple", "Mango", "Banana", "Watermelon", "Orange","Apple", "Mango", "Banana", "Watermelon", "Orange"];

  return (
    <div className="m-auto w-50 mt-3">
      <ul className="list-group">
        {fruits.map((fruit, i) => {
          return <li className="list-group-item list-group-item-action list-group-item-success">{fruit}</li>;
        })}
      </ul>
    </div>
  );
}

export default Fruits;
