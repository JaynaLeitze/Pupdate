import React, { useContext } from "react";
import { SymptomContext } from "./SymptomProvider";
import "./symptom.css";

export const SymptomSearch = (props) => {
  const { setTerms } = useContext(SymptomContext);

  return (
    <div className="symptomSearch">
      <input
        type="text"
        className="input--wide"
        onKeyUp={(keyEvent) => setTerms(keyEvent.target.value)}
        placeholder="Search symptoms... "
      />
    </div>
  );
};
