import React from "react";
import "./Pet.css";
import { Link } from "react-router-dom";

export const Pet = ({ pet }) => (
  <section className="pet">
    <div>
      <Link to={`/pets/${pet.id}`}>
        <img src={pet.image} width={300} />
      </Link>
    </div>
    <h4>{pet.petName}</h4>
  </section>
);
