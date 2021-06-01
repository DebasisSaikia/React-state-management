/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { incNum, decNum } from "./redux1/actions";
const App1 = () => {
  const counter = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="header">Increment / Decrement </h1>
      <div className="quantity">
        <button onClick={() => dispatch(decNum())}>-</button>
        <input type="text" name="quantity" value={counter} />
        <button onClick={() => dispatch(incNum())}>+</button>
      </div>
    </>
  );
};

export default App1;
