import React, { useContext, useEffect, useState } from "react";
import { SymptomContext } from "./SymptomProvider";
import { Symptom } from "./Symptom";
import "./Symptoms.css";

export const SymptomList = (props) => {
  const { symptoms, searchTerms, getSymptomsByPetId } = useContext(
    SymptomContext
  );
  const [filteredSymptoms, setFiltered] = useState([]);

  useEffect(() => {
    getSymptomsByPetId();
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

      <div className="symptoms">
        {filteredSymptoms.map((symptom) => {
          return <Symptom key={symptom.id} symptom={symptom} />;
        })}
      </div>
    </>
  );
};
