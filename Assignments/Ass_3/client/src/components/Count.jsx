
import React, {useEffect} from "react";

function Count() {
  // let Count=0;
  //   const counting=()=>{
  //     Count++;
  //     console.log(Count);
  const [Counter, setcount] = useState(1);
  const counting = () => {
    setcount(Counter + 1);
  };
  const decounting = () => {
    setcount(Counter - 1);
 
  };
 useEffect (()=>{
  console.log ("Count is Change")
 },[Count])

  
  return (
    <div className="Container w-50 bg-secondary-subtle mt-6 p-5 rounded-10">
      <h2>Counter: {Counter}</h2>
      <button type="button" class="btn btn-warning " onClick={counting}> +</button>
      
       <button type="button" class="btn btn-warning " onClick={decounting}> -</button>
    </div>
  );
}

export default Count;
