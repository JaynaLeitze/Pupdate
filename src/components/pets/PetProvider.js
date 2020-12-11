import React, { useState, useEffect } from "react";

export const PetContext = React.createContext();

//establish what data can be used

export const PetProvider = (props) => {
  const [pets, setPets] = useState([]);

  const getPets = () => {
    return fetch("http://localhost:8088/pets")
      .then((res) => res.json())
      .then(setPets);
  };

  const addPet = (pet) => {
    fetch("http://localhost:8088/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pet),
    }).then(getPets);
  };

  const getPetById = (id) => {
    return fetch(
      `http://localhost:8088/pets/${id}?_expand=parent`
    ).then((res) => res.json());
  };

  //return context allows child components access

  return (
    <PetContext.Provider
      value={{
        pets,
        addPet,
        getPets,
        getPetById,
      }}
    >
      {props.children}
    </PetContext.Provider>
  );
};
