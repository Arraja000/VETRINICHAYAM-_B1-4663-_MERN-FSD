import { useState } from "react";
import MyComponent from "./components/MyComponent";
import ProfileCard from "./components/ProfileCard";
import Accordian from "./components/Accordian";
import Fruits from "./components/Fruits";
import Students from "./components/Students";
import Cards from "./components/Cards";
import NewCard from "./components/NewCard";

function App() {
  return (
    <>
      {/* <MyComponent name="Niranjan" phNo="23456" /> */}
      {/* <ProfileCard name="Niranjan Sai" age="10" bio="learning React" />
      <ProfileCard name="Sai" age="13" bio="loves coding" />
      <ProfileCard name="John" age="9" bio="loves music" />
      <ProfileCard name="Alice" age="12" bio="Eat Sleep" />
      <Accordian/> */}
      {/* <Fruits/>
      <Students/> */}
      {/* <Cards/> */}
      <NewCard/>
    </>
  );
}

export default App;
