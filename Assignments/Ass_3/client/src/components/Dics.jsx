import React, { useState } from "react";

function Dics() {
  const [play, setPlay] = useState("Let's Play");
  const [play1, setPlay1] = useState("1");
  const [play2, setPlay2] = useState("1");

  const handleChange = () => {
    let ran1 = Math.floor(Math.random() * 6) + 1;
    let ran2 = Math.floor(Math.random() * 6) + 1;

    play1(ran1);
    play2(ran2);

    ran1 > ran2 ? setPlay : "player 1 Win";
    ran1 < ran2 ? setPlay : "player 2 Win";
    ran1 = ran2 ? setPlay : "It's a Draw";
  };

  return (
    <div background-color="black" text-align="center">
      <h1 id="play">{play}</h1>
      <div
        className="container"
        display="flex"
        justify-content="center"
        gap="10px"
      >
        <div class="p1">
          <p className="" color="aliceblue">
            Player 1 😎
          </p>
          <br></br>
          <img id="p1" src="./images/dice${}.png" width="100" height="100" />
        </div>
        <br></br>
        <div class="p2">
          <p className="" color="aliceblue">
            Player 2 😍
          </p>
          <br></br>
          <img id="p2" src="./images/dice1.png" width="100" height="100" />
        </div>
      </div>
      <br></br>
      <button
        className="rollbutton"
        background-color="rgb(20, 231, 38)"
        height="6%"
        width="20%"
        border-radius="100%"
        onClick={handleChange}
      >
        Roll Dice
      </button>
    </div>
  );
}

export default Dics;
