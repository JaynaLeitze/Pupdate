import React, { useContext, useEffect, useState } from "react";
import { PetContext } from "./PetProvider";
import "./Pet.css";

export const PetDetails = (props) => {
  const { pets, addPets, getPets, getPetById } = useContext(PetContext);
  const petId = parseInt(props.match.params.petId);
  const [pet, setPet] = useState({});

  useEffect(() => {
    // getPetById(petId).then(setPet);
    getPets();
  }, []);
  useEffect(() => {
    console.log(props);
    const thisPet = pets.find((pet) => pet.id === petId) || {};
    setPet(thisPet);
  }, [pets]);
  return (
    <section className="pet">
      <img width="300px" src={pet.image} />
      <h3 className="petName">{pet.petName}</h3>
      <div className="petBreed">{pet.petBreed}</div>
      <div className="petAge">{pet.petAge}</div>
      <div className="petGender">{pet.gender}</div>
      <div className="petWeight">{pet.petWeight}</div>
      <div className="petConditions"></div>
    </section>
  );
};
