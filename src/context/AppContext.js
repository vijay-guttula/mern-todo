import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [credentials, setCredentials] = useState();
  return (
    <AppContext.Provider
      value={{
        credentials,
        setCredentials,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
