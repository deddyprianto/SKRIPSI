import React, { createContext, useContext, useReducer } from "react";

const CreateUserContext = createContext();

export const StateProvider = ({ reduce, initial, children }) => (
  <CreateUserContext.Provider value={useReducer(reduce, initial)}>
    {children}
  </CreateUserContext.Provider>
);
export const stateValueProvider = () => useContext(CreateUserContext);
