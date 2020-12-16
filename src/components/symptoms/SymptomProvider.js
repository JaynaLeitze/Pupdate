import React, { useState } from "react";

export const SymptomContext = React.createContext();

export const SymptomProvider = (props) => {
  const [symptoms, setSymptom] = useState([]);

  const getSymptoms = () => {
    return fetch("http://localhost:8088/symptoms")
      .then((res) => res.json())
      .then(setSymptom);
  };

  const addSymptom = (symptom) => {
    return fetch("http://localhost:8088/symptoms", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(symptom),
    }).then(getSymptoms);
  };

  return (
    <SymptomContext.Provider
      value={{
        symptoms,
        getSymptoms,
        addSymptom,
      }}
    >
      {props.children}
    </SymptomContext.Provider>
  );
};
