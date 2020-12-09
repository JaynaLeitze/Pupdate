import React from "react";
import { Route } from "react-router-dom";
import { PetParentProvider } from "./pet-parents/PetParentProvider";
import { PetForm } from "./pets/PetForm";
import { PetProvider } from "./pets/PetProvider";
import { PetList } from "./pets/PetList";

export const ApplicationViews = (props) => {
  return (
    <>
      <PetParentProvider>
        <PetProvider>
          <Route
            exact
            path="/pets"
            render={(props) => <PetList {...props} />}
          />

          <Route
            exact
            path="/pets/create"
            render={(props) => <PetForm {...props} />}
          />
        </PetProvider>
      </PetParentProvider>
    </>
  );
};
