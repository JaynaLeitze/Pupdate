import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Route } from "react-router-dom";
import { PetContext } from "./PetProvider";
import { ImageContext } from "../images/PupdateImages";

export const PetForm = (props) => {
  const { addPet } = useContext(PetContext);
  const [image, setImage] = useState("");
  const { register, handleSubmit, watch, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = (data) => {
    data.image = image;
    data.parentId = parseInt(localStorage.getItem("pet_parent"));
    addPet(data);
    props.history.push("/");
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
    return (
      <div className="pupdate_images">
        <h1>Upload Image</h1>
        <input
          type="file"
          name="file"
          placeholder="Upload an Image"
          onChange={uploadImage}
        />

        {loading ? (
          <h3>Fetching...</h3>
        ) : (
          <img src={image} style={{ width: "300px" }} />
        )}
      </div>
    );
  };
  return (
    <article>
      <div className="upload-img">
        <input
          name="petImage"
          ref={register}
          type="file"
          onChange={uploadImage}
        />
      </div>
      <img src={image} alt="" className="img-uploaded" size="10" />
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
    </article>
  );
};
