import React, { useContext, useEffect, useState } from "react";
import { PetContext } from "./PetProvider";
import "./Pet.css";

export const PetDetails = (props) => {
  const { pets, addPets, getPetById } = useContext(PetContext);
  const [pet, setPet] = useState({});

  useEffect(() => {
    const petId = parseInt(props.match.params.id);
    console.log(props);
    getPetById(petId).then(setPet);
  }, []);
  return (
    <section className="pet">
      <img size="300px" src={pet.petImage} />
      <h3 className="petName">{pet.petName}</h3>
      <div className="petBreed">{pet.petBreed}</div>
      <div className="petAge">{pet.petAge}</div>
      <div className="petGender">{pet.gender}</div>
      <div className="petWeight">{pet.petWeight}</div>
      <div className="petConditions"></div>
    </section>
  );
};
