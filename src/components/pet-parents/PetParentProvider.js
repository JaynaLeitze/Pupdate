import React, { useState, useEffect } from "react";

/*
    The context is imported and used by individual components
    that need data
*/
export const ParentContext = React.createContext();

/*
 This component establishes what data can be used.
 */
export const PetParentProvider = (props) => {
  const [parents, setParents] = useState([]);

  const getParents = () => {
    return fetch("http://localhost:8088/parents")
      .then((res) => res.json())
      .then(setParents);
  };

  const addParent = (parent) => {
    return fetch("http://localhost:8088/parents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parent),
    }).then(getParents);
  };

  /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
  return (
    <ParentContext.Provider
      value={{
        parents,
        addParent,
        getParents,
      }}
    >
      {props.children}
    </ParentContext.Provider>
  );
};
