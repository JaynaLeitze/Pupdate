import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { PetContext } from "./PetProvider";

export const PetForm = (props) => {
  const { addPet } = useContext(PetContext);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    data.parentId = parseInt(localStorage.getItem("pet_parent"));
    addPet(data);
  };
  return (
    <form className="petForm" onSubmit={handleSubmit(onSubmit)}>
      <label>Pet Name:</label>
      <input name="petName" ref={register} placeholder="Name" />
      <label>Gender:</label>
      <select name="gender" ref={register}>
        <option value="true">Female</option>
        <option value="false">Male</option>
      </select>
      <label>Breed:</label>
      <input name="petBreed" ref={register} placeholder="Breed" />
      <label>Age:</label>
      <input name="petAge" ref={register} placeholder="Age" />
      <label>Weight:</label>
      <input name="petWeight" ref={register} placeholder="Weight" />
      <label>Chronic Conditions:</label>
      <input name="petConditions" ref={register} placeholder="Conditions" />
      <label>Medications:</label>
      <input name="petMeds" ref={register} placeholder="Medications" />

      <input type="submit" />
    </form>
  );
};
