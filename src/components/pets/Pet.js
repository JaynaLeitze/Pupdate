import React from "react";
import "./Pet.css";
import { Link } from "react-router-dom";

//JSX for User's Pet List
export const Pet = ({ pet }) => (
  <section className="userPets">
    <div className="userPetCard">
      <Link to={`/pets/${pet.id}`}>
        <img src={pet.image} width={300} />
      </Link>
      <h4>{pet.petName}</h4>
    </div>
  </section>
);
