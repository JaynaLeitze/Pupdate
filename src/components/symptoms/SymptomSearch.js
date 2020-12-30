import React, { useContext } from "react";
import { SymptomContext } from "./SymptomProvider";
import "./Symptoms.css";

export const SymptomSearch = (props) => {
  const { setTerms } = useContext(SymptomContext);

  return (
    <>
      Symptom search:
      <input
        type="text"
        className="input--wide"
        onKeyUp={(keyEvent) => setTerms(keyEvent.target.value)}
        placeholder="Search symptoms... "
      />
    </>
  );
};
