import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { SymptomContext } from "./SymptomProvider";
import { PetContext } from "../pets/PetProvider";

export const SymptomForm = (props) => {
  const { symptoms, addSymptom } = useContext(SymptomContext);
  const { register, handleSubmit } = useForm();
  console.log(props);

  const onSubmit = (data) => {
    data.petId = parseInt(props.match.params.petId);
    addSymptom(data);
  };

  return (
    <form className="symptomForm" onSubmit={handleSubmit(onSubmit)}>
      <h3>Symptom</h3>
      <label>Date</label>
      <input type="date" name="date" ref={register} />
      <label>Symptom</label>
      <input type="text" name="symptom" ref={register} />
      <label>Likely Cause:</label>
      <input name="cause" ref={register} />
      <input type="submit" ref={register} />
    </form>
  );
};
