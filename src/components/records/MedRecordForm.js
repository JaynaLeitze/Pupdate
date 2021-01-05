import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RecordContext } from "./MedRecordsProvider";
import { VetContext } from "../vet/VetProvider";
import { PetContext } from "../pets/PetProvider";
import "./record.css";

export const RecordForm = (props) => {
  const { register, handleSubmit } = useForm();
  const { addRecord } = useContext(RecordContext);
  const { vets, getVets } = useContext(VetContext);
  const { pets, getPets, getRecordByPetId } = useContext(PetContext);
  // const [vet, setVet] = useState({});
  // const [pet, setPet] = useState({});

  useEffect(() => {
    getVets();
  }, []);

  //

  const petId = parseInt(props.match.params.petId);
  console.log(petId);
  console.log(props);

  const onSubmit = (data) => {
    data.petId = petId;
    addRecord(data).then(props.history.push(`/pets/${petId}`));
  };

  return (
    <form className="recordForm" onSubmit={handleSubmit(onSubmit)}>
      <h3>Vet Record</h3>
      <label>Date of Visit:</label>
      <input type="date" name="date" ref={register} />
      <select
        defaulvalue=""
        name="vetId"
        ref={register({ valueAsNumber: true })}
      >
        <option value="0">Select A Vet...</option>
        {vets.map((v) => (
          <option key={v.id} value={v.id}>
            {v.vetName}
          </option>
        ))}
      </select>
      <label>Visit Reason</label>
      <input type="text" name="reason" ref={register} />
      <label>Treatments:</label>
      <input type="text" name="treatment" ref={register} />
      <label>Vaccinations:</label>
      <input type="text" name="vaccinations" ref={register} />
      <input type="submit" ref={register} />
    </form>

    //vet conditional: if vet exists, map through vetRecords to grab vet Id.
    //if vet does not exist, present add vet button
  );
};
