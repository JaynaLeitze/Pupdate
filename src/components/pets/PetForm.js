import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Route } from "react-router-dom";
import { PetContext } from "./PetProvider";
import { ImageContext } from "../images/PupdateImages";
import defaultImage from "./defaultPaw.png";

export const PetForm = (props) => {
  const { pets, addPet, updatePet, getPetById } = useContext(PetContext);
  const [image, setImage] = useState("");
  const { register, handleSubmit, watch, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const editMode = props.match.params.hasOwnProperty("petId");
  console.log(props.match.params);
  const petId = props.match.params.petId;
  const [pet, setPet] = useState({});

  const getPetInEditMode = () => {
    if (editMode) {
      getPetById(petId).then(setPet);
    }
  };

  useEffect(() => {
    getPetInEditMode();
  }, [pets]);

  const onSubmit = (data) => {
    console.log(data);
    if (editMode) {
      data.image = image;
      data.id = petId;
      updatePet(data);
      props.history.push(`/pets/${petId}`);
    } else {
      data.image = image;
      data.userId = parseInt(localStorage.getItem("pet_parent"));
      addPet(data);
      props.history.push("/");
    }
  };

  const uploadImage = async (e) => {
    const files = e.target.files; //get the files that have been selected by the user
    const data = new FormData(); //
    data.append("file", files[0]); //get file that has been uploaded
    data.append("upload_preset", "pupdate"); // get the preset
    setLoading(true); //changing value from false to true
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/jayna/image/upload",

      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file);

    setImage(file.secure_url);
    setLoading(false);
  };
  return (
    <article className="addPet">
      <h1>Add/Edit Pet</h1>
      <div className="upload-img">
        <h5>Upload Image</h5>
        <input
          ref={register}
          name="petImage"
          type="file"
          onChange={uploadImage}
          defaultValue={pet.image}
        />
        {loading ? (
          <h3>Fetching...</h3>
        ) : (
          <img src={image} style={{ width: "300px" }} />
        )}
      </div>
      {/* <img src={image} alt="" className="img-uploaded" size="10" /> */}
      <form className="petForm" onSubmit={handleSubmit(onSubmit)}>
        <label>Pet Name:</label>
        <input
          name="petName"
          type="text"
          ref={register}
          placeholder="Name"
          defaultValue={pet.petName}
        />
        <label>Gender:</label>
        <select name="gender" ref={register}>
          <option value="true">Female</option>
          <option value="false">Male</option>
        </select>
        <label>Breed:</label>
        <input
          name="petBreed"
          type="text"
          ref={register}
          placeholder="Breed"
          defaultValue={pet.petBreed}
        />
        <label>Age:</label>
        <input
          name="petAge"
          type="number"
          ref={register}
          placeholder="Age"
          defaultValue={pet.petAge}
        />
        <label>Weight:</label>
        <input
          name="petWeight"
          type="number"
          ref={register}
          placeholder="Weight"
          defaultValue={pet.petWeight}
        />
        <label>Chronic Conditions:</label>
        <input
          name="petConditions"
          type="text"
          ref={register}
          placeholder="Conditions"
          defaultValue={pet.petConditions}
        />
        <label>Medications:</label>
        <input
          name="petMeds"
          type="text"
          ref={register}
          placeholder="Medications"
          defaultValue={pet.petMeds}
        />

        <input type="submit" />
      </form>
    </article>
  );
};
