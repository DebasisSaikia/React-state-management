import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/ducks/counter";

const Counter = ({ name }) => {
  const dispatch = useDispatch();

  const [votes, setVotes] = useState(0);
  const inc = () => {
    dispatch(increment());
    setVotes(votes + 1);
  };

  const dec = () => {
    dispatch(decrement());
    setVotes(votes - 1);
  };
  return (
    <>
      <p>{name}</p>
      <h5>{votes}</h5>
      <button onClick={inc}>ADD</button>
      <button onClick={dec}>Delete</button>
    </>
  );
};

export default Counter;
