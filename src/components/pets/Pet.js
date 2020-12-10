import React from "react";
import "./Pet.css";
import { Link } from "react-router-dom";

export const Pet = ({ pet }) => (
  <section className="pet">
    <h3 className="pet__name">
      <Link to={`/pets/${pet.id}`}>{pet.name}</Link>
    </h3>
  </section>
);
