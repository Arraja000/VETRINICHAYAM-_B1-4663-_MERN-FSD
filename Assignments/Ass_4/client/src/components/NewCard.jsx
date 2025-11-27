import React from "react";
import companies from "../assets/companies.json";

function NewCard() {
  return (
    <>
      <div class="container my-4">
        <div class="d-flex flex-wrap justify-content-around">
          {companies.map((c, i) => {
            return (
              <div class="mb-4" style={{ width: "20rem" }}>
                <div class="card shadow h-100">
                  <div class="card-body">
                    <h4 class="card-title text-primary">{c.company}</h4>
                    <h6 class="card-subtitle mb-3 text-muted">{c.location}</h6>
                    <ul class="list-group list-group-flush">
                      {c.employees.map((e, i) => {
                        return (
                          <li class="list-group-item">
                            <strong>{e.name}</strong>
                            <span class="badge bg-info text-dark ms-2">
                              {e.role}
                            </span>
                            <div class="mt-2">
                              {e.skills.map((s, i) => {
                                return (
                                  <span class="badge bg-secondary me-1 mb-1">
                                    {s}
                                  </span>
                                );
                              })}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default NewCard;
