import React, { useState, useEffect } from "react";

export const RecordContext = React.createContext;

export const RecordProvider = () => {
  const [records, setRecords] = useState([]);

  const getRecords = () => {
    return fetch("localhost:8088/records")
      .then((res) => res.json())
      .then(setRecords);
  };

  const addRecord = (record) => {
    return fetch("localhost:8088/records/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(record),
    }).then(getRecords);
  };
  return (
    <RecordContext.Provider
      value={{
        records,
        getRecords,
        addRecord,
      }}
    >
      {props.children}
    </RecordContext.Provider>
  );
};
