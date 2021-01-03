import React, { useContext, useEffect, useState } from "react";
import { SymptomContext } from "./SymptomProvider";

export const SymptomDetails = (props, symptom) => {
  const { symptoms, removeSymptom, getSymptomsByPetId } = useContext(
    SymptomContext
  );
  //   console.log(symptom);
  const petId = parseInt(props.match.params.petId);
  //   //   const [symptom, setSymptom] = useState([]);
  console.log(props);
  useEffect(() => {
    getSymptomsByPetId(petId);
  }, []);

  //   useEffect(() => {
  //     console.log(symptoms);
  //   }, [symptoms]);

  return (
    <div className="symptomDetail" key={symptom.id} value={symptom.id}>
      <div>Symptom: {symptom.symptom}</div>
      <div>Date: {symptom.date}</div>
      <div>Likely Cause: {symptom.cause}</div>
      <button
        onClick={() => {
          removeSymptom(symptom.id).then(() => {
            props.history.push(`/pets/${symptom.petId}`);
          });
        }}
      >
        Delete Symptom
      </button>
    </div>
  );
};
