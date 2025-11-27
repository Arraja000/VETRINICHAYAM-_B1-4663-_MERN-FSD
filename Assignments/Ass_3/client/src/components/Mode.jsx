import React, { useState } from "react";
import Colour from "./Colour";

function Mode() {
  const [theme,setTheme] = useState(false);
  const handleChange = () => {
    setTheme(!theme);
  };
  const dark={
                backgroundColor:"white",
                color:"black",
              
  };
  const light={
                backgroundColor:"black",
                 color:"white",
                
             
  };
  

  return (
    <div className="d-flex flex-column align-items-center justify-content-center " style={theme?dark:light}>
      
        
      
          <h1>{theme?"Light Mode ☀☀☀":"Dark Mode🌑🌑🌑"} </h1>
    
        <button
          type="button"
          style={{ height: "10%", width: "10%" }}
          className="btn btn-primary"
          onClick={handleChange} >
          Switch to : {theme ?"Dark":"Light"} 
        </button>
      </div>
  );
}

export default Mode;
