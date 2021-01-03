import React, { useContext, useEffect, useState } from "react";
import { SymptomContext } from "./SymptomProvider";
import { Symptom } from "./Symptom";
import "./Symptoms.css";
import { SymptomDetails } from "./SymptomDetail";

export const SymptomList = (props) => {
  const {
    symptoms,
    searchTerms,
    getSymptomsByPetId,
    removeSymptom,
  } = useContext(SymptomContext);
  const [filteredSymptoms, setFiltered] = useState([]);
  const petId = parseInt(props.match.params.petId);
  useEffect(() => {
    getSymptomsByPetId(petId);
  }, []);

  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching symptoms
      const subset = symptoms.filter((symptom) =>
        symptom.symptom.toLowerCase().includes(searchTerms)
      );
      setFiltered(subset);
    } else {
      // If the search field is blank, display all symptoms
      setFiltered(symptoms);
    }
  }, [searchTerms, symptoms]);

  return (
    <>
      <h1>Symptoms</h1>
      {filteredSymptoms.map((symptom) => {
        return (
          <div className="symptomDetail" key={symptom.id} value={symptom.id}>
            <div>Symptom: {symptom.symptom}</div>
            <div>Date: {symptom.date}</div>
            <div>Likely Cause: {symptom.cause}</div>
            <button
              onClick={() => {
                removeSymptom(symptom.id).then(() => {
                  props.history.push(`/symptoms/${symptom.petId}`);
                });
              }}
            >
              Delete Symptom
            </button>
          </div>
        );
      })}
      ;
    </>
  );
};
