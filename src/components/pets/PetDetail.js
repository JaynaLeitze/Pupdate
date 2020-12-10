import React, { useContext, useEffect, useState } from "react";
import { PetContext } from "./PetProvider";
import "./Pet.css";
import { ParentContext } from "../pet-parents/PetParentProvider";

export const PetDetails = (props) => {
  const { pets, addPets, getPetById } = useContext(PetContext);
  const [pet, setPet] = useState({ parent: {} });

  useEffect(() => {
    const petId = parseInt(props.match.params.petId);
    getPetById(petId).then(setPet);
  });
  return (
    <section className="pet">
      <h3 className="petName">{pet.name}</h3>
      <div className="petBreed">{pet.breed}</div>
      <div className="petAge">{pet.Age}</div>
      <div className="petGender">{pet.gender === true ? "Male" : "Female"}</div>
    </section>
  );
};
