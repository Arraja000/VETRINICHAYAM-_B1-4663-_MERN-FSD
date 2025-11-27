import React, { useEffect, useState } from "react";
import axios from "axios"

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const fetchQuotes = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/quotes");
          
console.log(response);
      setQuotes(response.data.quotes);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(()=> {
fetchQuotes();},
[]);

console.log(quotes)

  return (
  <div>

  </div>
)}

export default Quotes;
