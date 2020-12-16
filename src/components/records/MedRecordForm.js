import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RecordContext } from "./MedRecordsProvider";
import { VetContext } from "../vet/VetProvider";
import { PetContext } from "../pets/PetProvider";

export const RecordForm = (props) => {
  const { register, handleSubmit } = useForm();
  const { addRecord } = useContext(RecordContext);
  const { vets, getVets, getVetById } = useContext(VetContext);
  const { pets, getPets } = useContext(PetContext);
  const [vet, setVet] = useState({});
  const [pet, setPet] = useState({});

  // const vetId = vets.find((v) => v.id === vetId);
  // const vetId = parseInt(props.match.params.vetId);

  const petId = parseInt(props.match.params.petId);
  console.log(petId);
  console.log(props);

  const onSubmit = (data) => {
    console.log(props);
    // data.vetId = vetId;
    data.petId = petId;
    addRecord(data).then(props.history.push("/"));
  };
  useEffect(() => {
    getPets().then(getVets);
  }, []);
  return (
    <form className="recordForm" onSubmit={handleSubmit(onSubmit)}>
      <h3>Vet Record</h3>
      <label>Date of Visit:</label>
      <input type="date" name="date" ref={register} />
      <label>Visit Reason</label>
      <input type="text" name="reason" ref={register} />
      <label>Treatments:</label>
      <input name="treatment" ref={register} />
      <label>Vaccinations:</label>
      <input name="vaccinations" ref={register} />
      <input type="submit" ref={register} />
    </form>
  );
};
