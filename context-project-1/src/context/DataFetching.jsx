import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Success":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "Error":
      return {
        loading: false,
        post: {},
        error: "Something went wrong",
      };
    default:
      return state;
  }
};

const DataFetching = () => {
  return <div></div>;
};

export default DataFetching;
