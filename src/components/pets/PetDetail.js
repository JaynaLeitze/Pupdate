import React, { useContext, useEffect, useState } from "react";
import { PetContext } from "./PetProvider";
import "./Pet.css";
import { Link } from "react-router-dom";
import { VetContext } from "../vet/VetProvider";

export const PetDetails = (props) => {
  const {
    pets,
    getPets,
    getPetById,
    getRecordByPetId,
    vetRecords,
  } = useContext(PetContext);
  const petId = parseInt(props.match.params.petId);
  const [pet, setPet] = useState({});
  const [vet, setVet] = useState({});

  useEffect(() => {
    getPets().then(() => getRecordByPetId(petId));
  }, []);

  useEffect(() => {
    console.log(props);
    const thisPet = pets.find((pet) => pet.id === petId) || {};
    setPet(thisPet);
  }, [pets]);

  // useEffect(() => {
  //   const thisVet = vetRecords.map((vetRecord) => {
  //     console.log(vets);
  //     setFoundVet(vets.find((v) => v.id === vetRecord.vetId));
  //   });
  //   setVet(thisVet);
  //   console.log(thisVet);
  // }, [vets]);
  // console.log(foundVet);

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
        <div>
          <Link to={"/symptoms/create"}>
            <button>Add Symptom</button>
          </Link>
        </div>
      </section>
      <section className="medRecords">
        <h3>Medical Records</h3>
        <div className="recordCard">
          {vetRecords.map((record) => {
            return (
              <>
                <div>{record.vetDate}</div>
                <div>{record.visitReason}</div>
                <div>{record.treatment}</div>
                <div>{record.vaccinations}</div>
              </>
            );
          })}
        </div>
      </section>
      <section className="vetInfo">
        <h3>Veterinarian</h3>

        {vetRecords.length > 0 ? (
          vetRecords.map((vet) => {
            return (
              <>
                <div>{vet.vet.vetName}</div>
                <div>{vet.vet.addressLine1}</div>
                <div>{vet.vet.addressLine2}</div>
                <div>
                  {vet.vet.city}, {vet.vet.state} {vet.vet.zip}
                </div>
                <div>{vet.vet.phone}</div>
                <div>{vet.vet.email}</div>
                <div>{vet.vet.website}</div>
              </>
            );
          })
        ) : (
          <>
            <div>
              <Link to={"/vets/create"}>
                <button>Add Veterinarian</button>
              </Link>
            </div>
          </>
        )}
      </section>
    </article>
  );
};
