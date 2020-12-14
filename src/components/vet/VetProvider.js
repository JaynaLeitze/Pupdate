import React, { useState, useEffect } from "react";

export const VetContext = React.createContext();

export const VetProvider = (props) => {
  const [vet, setVet] = useState([]);

  const getVet = () => {
    return fetch("https://localhost:8088/vet")
      .then((res) => res.json())
      .then(setVet);
  };

  const addVet = (vet) => {
    return fetch("https://localhost:8088/vets/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vet),
    }).then(getVet);
  };

  const getVetById = (id) => {
    return fetch(`http://localhost:8088/vet/${id}`).then((res) => res.json());
  };

  return (
    <VetContext.Provider value={{ vet, getVet, addVet, getVetById }}>
      {props.children}
    </VetContext.Provider>
  );
};
