import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";

const App = () => {
  const count = useSelector((state) => state.counter.count);
  return (
    <>
      <h1>Counter : {count}</h1>
      <Counter name="debasis saikia" />
    </>
  );
};

export default App;
