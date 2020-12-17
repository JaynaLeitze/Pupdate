import React, { useState } from "react";

export const SymptomContext = React.createContext();

export const SymptomProvider = (props) => {
  const [symptoms, setSymptoms] = useState([]);

  const getSymptoms = () => {
    return fetch("http://localhost:8088/symptoms")
      .then((res) => res.json())
      .then(setSymptoms);
  };

  const addSymptom = (symptom) => {
    return fetch("http://localhost:8088/symptoms", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(symptom),
    }).then(getSymptomsByPetId);
  };

  const getSymptomsByPetId = (petId) => {
    return fetch(`http://localhost:8088/symptoms?petId=${petId}`)
      .then((res) => res.json())
      .then(setSymptoms);
  };

  const removeSymptom = (symptomId) => {
    return fetch(`http://localhost:8088/symptoms/${symptomId}`, {
      method: "DELETE",
    }).then(getSymptoms);
  };
  return (
    <SymptomContext.Provider
      value={{
        symptoms,
        getSymptoms,
        addSymptom,
        removeSymptom,
        getSymptomsByPetId,
      }}
    >
      {props.children}
    </SymptomContext.Provider>
  );
};
