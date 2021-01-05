import React, { useState, useEffect } from "react";

export const VetContext = React.createContext();

export const VetProvider = (props) => {
  const [vets, setVet] = useState([]);

  const getVets = () => {
    const activeUser = parseInt(localStorage.getItem("pet_parent"));
    return fetch(`http://localhost:8088/vets?userId=${activeUser}`)
      .then((res) => res.json())
      .then(setVet);
  };

  const addVet = (vet) => {
    return fetch("http://localhost:8088/vets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vet),
    }).then(getVets);
  };

  const getVetById = (id) => {
    return fetch(`http://localhost:8088/vets/${id}`).then((res) => res.json());
  };

  return (
    <VetContext.Provider value={{ vets, getVets, addVet, getVetById }}>
      {props.children}
    </VetContext.Provider>
  );
};
