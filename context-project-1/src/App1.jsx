import React from "react";
import { createContext } from "react";
import Counter2 from "./context/Counter2";

export const UserContext = createContext();
export const TitleContext = createContext();

const App1 = () => {
  return (
    // <UserContext.Provider value={"Debasis "}>
    //   <TitleContext.Provider value={"Saikia"}>
    //     <CompC />
    //   </TitleContext.Provider>
    // </UserContext.Provider>
    <Counter2 />
  );
};

export default App1;
