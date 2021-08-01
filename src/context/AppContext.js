import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [credentials, setCredentials] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AppContext.Provider
      value={{
        credentials,
        setCredentials,
        loggedIn,
        setLoggedIn,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
