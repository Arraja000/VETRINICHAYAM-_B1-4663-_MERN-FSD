import React from "react";
import file from "../assets/companies.json";

function Company() {
  return (
    <div class="container my-4">
    < div class="d-flex flex-wrap justify-content-around">
      {file.map((Fil, i) => {
        return (
         
              <div class="mb-4" style={{width: "20rem"}}>
                <div class="card shadow h-100">
                  <div class="card-body">
                    <h4 class="card-title text-primary">{Fil.company}</h4>
                    <h6 class="card-subtitle mb-3 text-muted">{Fil.location}</h6>

                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">
                        <strong>{Fil.employees[0].name}</strong>
                        <span class="badge bg-info text-dark ms-2">
                         {Fil.employees[0].role}
                        </span>

                        <div class="mt-2">
                          <span class="badge bg-secondary me-1 mb-1">
                            {Fil.employees[0].skills[0]}
                          </span>
                            <span class="badge bg-secondary me-1 mb-1">
                            Kubernetes
                          </span>
                          <span class="badge bg-secondary me-1 mb-1">
                            {" "}
                            GCp{" "}</span>
                          <span class="badge bg-secondary me-1 mb-1">
                          </span>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <strong>{Fil.employees[1].name}</strong>
                        <span class="badge bg-info text-dark ms-2">
                           {Fil.employees[1].role}
                        </span>

                        <div class="mt-2">
                          <span class="badge bg-secondary me-1 mb-1">
                         {Fil.employees[1].skills[0]}
                          </span>
                          <span class="badge bg-secondary me-1 mb-1">
                            Kubernetes
                          </span>
                          <span class="badge bg-secondary me-1 mb-1">
                            {" "}
                            GCp{" "}</span>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <strong>{Fil.employees[2].name}</strong>
                        <span class="badge bg-info text-dark ms-2">
                          {" "} {Fil.employees[2].role}
                         {" "}
                        </span>

                        <div class="mt-2">
                          <span class="badge bg-secondary me-1 mb-1">
                           {Fil.employees[2].skills[0]}
                          </span>
                          <span class="badge bg-secondary me-1 mb-1">
                            Kubernetes
                          </span>
                          <span class="badge bg-secondary me-1 mb-1">
                            {" "}
                            GCp{" "}
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
           
        );
      })}
       </div>
          </div>
        );
    
}

export default Company;
