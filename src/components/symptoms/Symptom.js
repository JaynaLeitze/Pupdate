import React from "react";
import "./Symptoms.css";

export const Symptom = ({ symptom }) => (
  <div key={symptom.id} value={symptom.id}>
    <div>{symptom.symptom}</div>
    <div>{symptom.date}</div>
    <div>{symptom.cause}</div>
  </div>
);
