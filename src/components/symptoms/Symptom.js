import React from "react";
import "./symptom.css";

export const Symptom = ({ symptom }) => (
  <div key={symptom.id} value={symptom.id}>
    <div>
      <b>Symptom:</b> {symptom.symptom}
    </div>
    <div>
      <b>Date:</b> {symptom.date}
    </div>
    <div>
      <b>Cause:</b> {symptom.cause}
    </div>
  </div>
);
