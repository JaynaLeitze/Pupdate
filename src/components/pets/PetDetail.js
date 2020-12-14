import React, { useContext, useEffect, useState } from "react";
import { PetContext } from "./PetProvider";
import "./Pet.css";

export const PetDetails = (props) => {
  const {
    pets,
    addPets,
    getPets,
    getPetById,
    getRecordByPetId,
    vetRecords,
  } = useContext(PetContext);
  const petId = parseInt(props.match.params.petId);
  const [pet, setPet] = useState({});

  useEffect(() => {
    // getPetById(petId).then(setPet);
    getPets().then(() => getRecordByPetId(petId));
  }, []);
  useEffect(() => {
    console.log(props);
    const thisPet = pets.find((pet) => pet.id === petId) || {};
    setPet(thisPet);
  }, [pets]);
  console.log(vetRecords);
  return (
    <article className="petDashboard">
      <section className="petCard">
        <img width="300px" src={pet.image} />
        <h3 className="petName">{pet.petName}</h3>
        <div className="petBreed">Breed: {pet.petBreed}</div>
        <div className="petAge">Age:{pet.petAge}</div>
        <div className="petGender">
          Gender:{pet.gender === true ? "Male" : "Female"}
        </div>
        <div className="petWeight">Weight:{pet.petWeight}</div>
        <div className="petConditions">
          Chronic Conditions:{pet.petConditions}
        </div>
        <div className="petMedications">Medications: </div>
      </section>
      <section className="symptoms">
        <h3>Symptoms</h3>
      </section>
      <section className="medRecords">
        <h3>Medical Records</h3>
      </section>
      <section className="vetInfo">
        <h3>Veterinarian</h3>
      </section>
    </article>
  );
};
