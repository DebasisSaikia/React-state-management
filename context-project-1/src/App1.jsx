import React from "react";
import { createContext } from "react";
import CompC from "./context/CompC";

export const UserContext = createContext();
export const TitleContext = createContext();

const App1 = () => {
  return (
    <UserContext.Provider value={"Debasis "}>
      <TitleContext.Provider value={"Saikia"}>
        <CompC />
      </TitleContext.Provider>
    </UserContext.Provider>
  );
};

export default App1;
