import React from "react";
import { createContext } from "react";
import CompC from "./context/CompC";
import Counter1 from "./context/Counter1";

// export const UserContext = createContext();
// export const TitleContext = createContext();

const App1 = () => {
  return (
    // <UserContext.Provider value={"Debasis "}>
    //   <TitleContext.Provider value={"Saikia"}>
    //     <CompC />
    //   </TitleContext.Provider>
    // </UserContext.Provider>
    <Counter1 />
  );
};

export default App1;
