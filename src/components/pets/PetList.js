import React, { useContext, useEffect, useState } from "react";
import { PetContext } from "./PetProvider";
import { PetDetails } from "./PetDetail";
import { Pet } from "./Pet";

export const PetList = ({ history }) => {
  const { pets, getPets, getPetById } = useContext(PetContext);

  useEffect(() => {
    getPets();
  }, []);

  return (
    <>
      <h1>Your Pets</h1>
      <div className="yourPets">
        {pets.map((pet) => {
          return <Pet key={pet.id} />;
        })}
      </div>
      <button className="addPet" onClick={() => history.push("/pets/create")}>
        Add a Pet
      </button>
    </>
  );
};
