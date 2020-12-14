import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { VetContext } from "./VetProvider";

export const VetForm = (props) => {
  const { addVet } = useContext(VetContext);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    addVet(data);
  };
  return (
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
      <input type="text" name="zip" ref={register} />
      <label>Vet Phone Number:</label>
      <input type="text" name="phone" ref={register} />
      <label>Vet Email:</label>
      <input type="text" name="email" ref={register} />
      <label>Website:</label>
      <input type="text" name="website" ref={register} />
      <input type="submit" />
    </form>
  );
};
