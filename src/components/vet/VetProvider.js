import React, { useState, useEffect } from "react";

export const VetContext = React.createContext();

export const VetProvider = () => {
  const [vet, setVet] = useState([]);

  const getVet = () => {
    return fetch("https://localhost:8088/vet")
      .then((res) => res.json())
      .then(setVet);
  };

  const addVet = (vet) => {
    return fetch("https://localhost:8088/vet/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vet),
    }).then(getVet);
  };

  return (
    <VetContext.Provider value={{ vet, getVet, addVet }}>
      {props.children}
    </VetContext.Provider>
  );
};
