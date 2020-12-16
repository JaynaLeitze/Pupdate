import React from "react";
import { Route } from "react-router-dom";
import { PetParentProvider } from "./pet-parents/PetParentProvider";
import { PetForm } from "./pets/PetForm";
import { PetProvider } from "./pets/PetProvider";
import { PetList } from "./pets/PetList";
import { PetDetails } from "./pets/PetDetail";
import { VetForm } from "./vet/VetForm";
import { VetProvider } from "./vet/VetProvider";

export const ApplicationViews = (props) => {
  return (
    <>
      <PetParentProvider>
        <PetProvider>
          <VetProvider>
            <Route exact path="/" render={(props) => <PetList {...props} />} />

            <Route
              exact
              path="/pets/create"
              render={(props) => <PetForm {...props} />}
            />
            <Route
              path="/pets/:petId(\d+)"
              render={(props) => <PetDetails {...props} />}
            />
          </VetProvider>
        </PetProvider>
      </PetParentProvider>

      <VetProvider>
        <PetProvider>
          <Route
            exact
            path="/vets/create"
            render={(props) => <VetForm {...props} />}
          />
        </PetProvider>
      </VetProvider>
    </>
  );
};
