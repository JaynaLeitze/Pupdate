import React, { useContext, useEffect, useState } from "react";
import { PetContext } from "./PetProvider";
import "./Pet.css";
import { Link } from "react-router-dom";
import { VetContext } from "../vet/VetProvider";

export const PetDetails = (props) => {
  const {
    pets,
    addPets,
    getPets,
    getPetById,
    getRecordByPetId,
    vetRecords,
  } = useContext(PetContext);
  const vets = useContext(VetContext);
  const petId = parseInt(props.match.params.petId);
  const [pet, setPet] = useState({});
  const [vet, setVet] = useState({});

  useEffect(() => {
    getPets().then(() => getRecordByPetId(petId));
  }, []);

  console.log("Here are the vet records", vetRecords);
  // console.log(vetId);

  useEffect(() => {
    console.log(props);
    const thisPet = pets.find((pet) => pet.id === petId) || {};
    setPet(thisPet);
  }, [pets]);

  useEffect(() => {
    const thisVet = vetRecords.find((vet) => vet.vetId === vet.vet.id) || {};
    setVet(thisVet);
  }, [vetRecords]);

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
        {/* {vetRecords.map((record) => {
          return (
            (<div>{record.vetDate}</div>), (<div>{record.visitReason}</div>)
          );
        })} */}
      </section>
      <section className="vetInfo">
        <h3>Veterinarian</h3>
        {vetRecords.length > 0 ? (
          ((<div>{vet.vet.vetName}</div>),
          ((
            <address>
              {vet.vet.addressLine1}
              <br />,{vet.vet.addressLine2}
              <br />,{(vet.vet.city, vet.vet.state, vet.vet.zip)}
            </address>
          ),
          (<div>{vet.vet.phone}</div>),
          (<div>{vet.vet.email}</div>),
          (<div>{vet.vet.website}</div>)))
        ) : (
          <div>
            <Link to={"/vets/create"}>
              <button>Add Veterinarian</button>
            </Link>
          </div>
        )}
      </section>
    </article>
  );
};
