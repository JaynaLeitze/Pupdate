import React, { useContext, useEffect, useState } from "react";
import { PetContext } from "./PetProvider";
import { PetDetails } from "./PetDetail";
import { Pet } from "./Pet";

export const PetList = ({ history }) => {
  const { pets, getPets, getPetById } = useContext(PetContext);
  const user = parseInt(localStorage.getItem("pet_parent"));

  useEffect(() => {
    getPets();
  }, []);
  console.log(pets);
  return (
    <>
      <h1>Your Pets</h1>
      <div className="yourPets">
        {pets.map((pet) => {
          if (pet.userId === user) return <Pet key={pet.id} pet={pet} />;
        })}
      </div>
      <button className="addPet" onClick={() => history.push("/pets/create")}>
        Add a Pet
      </button>
    </>
  );
};
