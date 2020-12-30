import React, { useContext, useEffect, useState } from "react";
import { SymptomContext } from "./SymptomProvider";

export const SymptomDetails = (props) => {
  const { symptoms, removeSymptom, getSymptomsByPetId } = useContext(
    SymptomContext
  );

  //   const [symptom, setSymptom] = useState([]);

  useEffect(() => {
    const petId = parseInt(props.match.params.petId);
    getSymptomsByPetId(petId);
  }, []);

  return (
    <div>
      {symptoms.map((symptom) => {
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
      })}
    </div>
  );
};
