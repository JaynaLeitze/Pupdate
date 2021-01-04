import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { VetContext } from "./VetProvider";
import { PetContext } from "../pets/PetProvider";
import { useHistory } from "react-router-dom";
import "./vet.css";
export const VetForm = (props) => {
  const { getPets } = useContext(PetContext);
  const { addVet, getVets } = useContext(VetContext);
  const { register, handleSubmit, watch, errors } = useForm();
  let history = useHistory();

  useEffect(() => {
    getPets().then(getVets);
  }, []);
  const userId = parseInt(localStorage.getItem("pet_parent"));
  const petId = parseInt(props.match.params.petId);
  console.log("this is a pet", props.match.params);
  const onSubmit = (data) => {
    data.userId = userId;
    addVet(data).then(history.goBack());
  };
  return (
    <article className="addVet">
      <h1>Add Veterinarian</h1>
      <form className="vetForm" onSubmit={handleSubmit(onSubmit)}>
        <label>Vet Name:</label>
        <input type="text" name="vetName" ref={register} />
        <label>Address Line 1:</label>
        <input type="text" name="addressLine1" ref={register} />
        <label>Address Line 2:</label>
        <input type="text" name="addressLine2" ref={register} />
        <label>City:</label>
        <input type="text" name="city" ref={register} />
        <label>State:</label>
        <input type="text" name="state" ref={register} />
        <label>Zip Code:</label>
        <input type="number" name="zip" ref={register} />
        <label>Vet Phone Number:</label>
        <input type="number" name="phone" ref={register} />
        <label>Vet Email:</label>
        <input type="email" name="email" ref={register} />
        <label>Website:</label>
        <input type="url" name="website" ref={register} />
        <input type="submit" />
      </form>
    </article>
  );
};
