import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [credentials, setCredentials] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [justLoggedIn, setJustLoggedIn] = useState(false);

  return (
    <AppContext.Provider
      value={{
        credentials,
        setCredentials,
        loggedIn,
        setLoggedIn,
        justLoggedIn,
        setJustLoggedIn,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
