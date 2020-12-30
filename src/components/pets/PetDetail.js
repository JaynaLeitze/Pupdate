import React, { useContext, useEffect, useState } from "react";
import { PetContext } from "./PetProvider";
import "./Pet.css";
import { Link } from "react-router-dom";
import { VetContext } from "../vet/VetProvider";
import { SymptomContext } from "../symptoms/SymptomProvider";
import { Symptom } from "../symptoms/Symptom";

export const PetDetails = (props) => {
  const {
    pets,
    getPets,
    getPetById,
    getRecordByPetId,
    vetRecords,
  } = useContext(PetContext);
  const { vets, getVets } = useContext(VetContext);
  const { symptoms, getSymptomsByPetId, removeSymptom } = useContext(
    SymptomContext
  );
  const petId = parseInt(props.match.params.petId);
  const [pet, setPet] = useState({});

  useEffect(() => {
    getPets()
      .then(() => getRecordByPetId(petId))
      .then(() => getSymptomsByPetId(petId))
      .then(getVets);
  }, []);

  useEffect(() => {
    console.log(props);
    const thisPet = pets.find((pet) => pet.id === petId) || {};
    setPet(thisPet);
  }, [pets]);

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
        <button
          onClick={() => {
            props.history.push(`/pets/edit/${pet.id}`);
          }}
        >
          Edit Pet
        </button>
      </section>
      <section className="detailSymptoms">
        <h3>Symptoms</h3>
        <div>
          {symptoms.map((symptom) => {
            return (
              <div>
                <Symptom key={symptom.id} symptom={symptom} />
              </div>
            );
          })}
        </div>
        <div>
          <Link to={`/symptoms/create/${pet.id}`}>
            <button>Add Symptom</button>
          </Link>
        </div>
        <div>
          <Link to={`/symptoms/${petId}`}>
            <button>View All Symptoms</button>
          </Link>
        </div>
      </section>
      <section className="medRecords">
        <h3>Medical Records</h3>
        <div className="recordCard">
          {vetRecords.map((record) => {
            return (
              <div key={record.id} value={record.id}>
                <div>{record.date}</div>
                <div>{record.reason}</div>
                <div>{record.treatment}</div>
                <div>{record.vaccinations}</div>
              </div>
            );
          })}
        </div>
        <div>
          <Link to={`/records/create/${pet.id}`}>
            <button>Add Vet Record</button>
          </Link>
        </div>
      </section>
      <section className="vetInfo">
        <h3>Veterinarian</h3>
        {vets.map((vet) => {
          return (
            <div key={vet.id} value={vet.id}>
              <div>{vet.vetName}</div>
              <div>{vet.addressLine1}</div>
              <div>{vet.addressLine2}</div>
              <div>
                {vet.city}, {vet.state} {vet.zip}
              </div>
              <div>{vet.phone}</div>
              <div>{vet.email}</div>
              <div>{vet.website}</div>
            </div>
          );
        })}

        <div>
          <Link to={"/vets/create"}>
            <button>Add Veterinarian</button>
          </Link>
        </div>
      </section>
    </article>
  );
};
