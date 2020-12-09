import React, { useContext, useEffect, useState } from "react";
import { PetContext } from "./PetProvider";

export const PetList = ({ history }) => {
  const { pets, getPets, getPetById } = useContext(PetContext);

  useEffect(() => {
    getPets();
  }, []);

  return (
    <>
      <h1>Your Pets</h1>
      <button className="addPet" onClick={() => history.push("/pets/create")}>
        Add a Pet
      </button>
    </>
  );
};
