import React from "react";
import data from "../assets/newData.json";

function Cards() {
  return (
    <div class="d-flex flex-wrap justify-content-around gap-2">
      {data.map((user, i) => {
        return (
          <div class="card mt-3" style={{ width: "18rem" }}>
            <img src={user.picture} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{user.name.title}. {user.name.first}</h5>
              <p class="card-text mb-1">123-456-7890</p>
              <p class="card-text mb-0">Edmond, Oklahoma</p>
              <p class="card-text mb-2">500001</p>
              <a href="#" class="">
                {" "}
                john@gmail.com{" "}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );

  //   return (
  //     <div className="d-flex flex-wrap justify-content-around px-3 gap-2">
  //       {data.map((d, i) => {
  //         return (
  //           <div className="card mt-3" style={{ width: "18rem" }}>
  //             <img src={d.picture} className="card-img-top" alt="..." />
  //             <div className="card-body">
  //               <h5 className="card-title">
  //                 {d.name.title} {d.name.first}
  //               </h5>
  //               <p className="card-text mb-0">{d.cell}</p>
  //               <p className="card-text mb-0">
  //                 {d.location.city},{d.location.state}
  //               </p>
  //               <p className="card-text">{d.location.country}</p>
  //               <a href="#" className="">
  //                 {d.email}
  //               </a>
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
}

export default Cards;
