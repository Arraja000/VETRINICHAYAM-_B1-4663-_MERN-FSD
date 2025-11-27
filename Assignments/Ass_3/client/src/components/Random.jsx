import React, { useEffect, useState } from "react";
import axios from "axios";

function Random() {
  const [user, setUser] = useState([]);
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "https://randomuser.me/api/?results=100"
      );

      
      setUser(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);



  return (
    <div className="d-flex flex-wrap justify-content-around">
      {user.map((da, i) => {
        return (
          <div class="card mb-3" style={{ width: "18rem" }}>
            <img src={da.picture.medium} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                {da.name.title}
                {da.name.first}
              </h5>
              <p className="card-text mb-0"> {da.cell}</p>
              <p className="card-text mb-0">
                {" "}
                {da.location.city},{da.location.city}
              </p>
              <p className="card-text mb-0"> {da.location.country}</p>
              <a href="#">{da.email}</a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Random;
