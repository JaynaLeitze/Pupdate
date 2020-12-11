import React from "react";
import { Route } from "react-router-dom";
import { PetParentProvider } from "./pet-parents/PetParentProvider";
import { PetForm } from "./pets/PetForm";
import { PetProvider } from "./pets/PetProvider";
import { PetList } from "./pets/PetList";
import { PetDetails } from "./pets/PetDetail";

export const ApplicationViews = (props) => {
  return (
    <>
      <PetParentProvider>
        <PetProvider>
          <Route exact path="/" render={(props) => <PetList {...props} />} />

          <Route
            exact
            path="/pets/create"
            render={(props) => <PetForm {...props} />}
          />
          {/* <Route
            exact
            path="/pets/:parentId(\d+)"
            render={(props) => <PetDetails {...props} />}
          /> */}
        </PetProvider>
      </PetParentProvider>
    </>
  );
};
