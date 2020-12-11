import React, { useContext, useEffect, useState } from "react";
import { PetContext } from "./PetProvider";
import "./Pet.css";

export const PetDetails = (props) => {
  const { pets, addPets, getPetById } = useContext(PetContext);
  const [pet, setPet] = useState({ parent: {} });

  useEffect(() => {
    const petId = parseInt(props.match.params.petId);
    getPetById(petId).then(setPet);
  });
  return (
    <section className="pet">
      <h3 className="petName">{pet.petName}</h3>
      <div className="petBreed">{pet.petBreed}</div>
      <div className="petAge">{pet.petAge}</div>
    </section>
  );
};
