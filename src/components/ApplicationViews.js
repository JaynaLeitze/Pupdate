import React from "react";
import { Route } from "react-router-dom";
import { PetParentProvider } from "./pet-parents/PetParentProvider";
import { PetForm } from "./pets/PetForm";
import { PetProvider } from "./pets/PetProvider";
import { PetList } from "./pets/PetList";
import { PetDetails } from "./pets/PetDetail";
import { VetForm } from "./vet/VetForm";
import { VetProvider } from "./vet/VetProvider";
import { RecordForm } from "./records/MedRecordForm";
import { RecordProvider } from "./records/MedRecordsProvider";
import { SymptomProvider } from "./symptoms/SymptomProvider";
import { SymptomForm } from "./symptoms/SymptomForm";
import { SymptomList } from "./symptoms/SymptomList";
import { SymptomDetails } from "./symptoms/SymptomDetail";
import { SymptomSearch } from "./symptoms/SymptomSearch";

export const ApplicationViews = (props) => {
  return (
    <>
      <PetParentProvider>
        <PetProvider>
          <VetProvider>
            <RecordProvider>
              <SymptomProvider>
                <Route
                  exact
                  path="/"
                  render={(props) => <PetList {...props} />}
                />
                <Route
                  exact
                  path="/pets/create"
                  render={(props) => <PetForm {...props} />}
                />
                <Route
                  path="/pets/:petId(\d+)"
                  render={(props) => <PetDetails {...props} />}
                />
                <Route
                  exact
                  path="/vets/create"
                  render={(props) => <VetForm {...props} />}
                />
                <Route
                  exact
                  path="/records/create/:petId(\d+)"
                  render={(props) => <RecordForm {...props} />}
                />
                <Route
                  exact
                  path="/symptoms/create/:petId(\d+)"
                  render={(props) => <SymptomForm {...props} />}
                />
                <Route
                  exact
                  path="/symptoms/:petId(\d+)"
                  render={(props) => (
                    <>
                      {/* <SymptomSearch {...props} /> */}
                      <SymptomList {...props} />
                    </>
                  )}
                />
                <Route
                  path="/pets/edit/:petId(\d+)"
                  render={(props) => <PetForm {...props} />}
                />
              </SymptomProvider>
            </RecordProvider>
          </VetProvider>
        </PetProvider>
      </PetParentProvider>
    </>
  );
};
