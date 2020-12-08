import React, { useState, useEffect } from "react";

export const PetContext = React.createContext();

//establish what data can be used

export const PetProvider = (props) => {
  const [pets, setPets] = useState([]);

  const getPets = () => {
    return fetch("http://localhost.8088/pets")
      .then((res) => res.json())
      .then(setPets);
  };

  const addPet = (pet) => {
    fetch("http://localhost.8088/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pet),
    }).then(getPets);
  };

  // const getPetById = (id) => {
  //     return fetch ()
  // }

  return (
    <PetContext.Provider
      value={{
        pets,
        addPet,
        getPets,
      }}
    >
      {props.children}
    </PetContext.Provider>
  );
};
