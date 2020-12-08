import React, { useContext, useEffect, useState } from "react";
import { PetContext } from "./PetProvider";

export const AnimalList = ({ history }) => {
  const { pets, getPets } = useContext(PetContext);

  useEffect(() => {
    getPets();
  }, []);

  return (
    <>
      <h1>Your Pets</h1>
      <button className="add__pet" onClick={() => history.push("/pets/create")}>
        Add a Pet
      </button>
    </>
  );
};
