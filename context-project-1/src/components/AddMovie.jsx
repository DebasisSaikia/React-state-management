import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movie, setMovies] = useContext(MovieContext);

  const addForm = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
  };
  return (
    <>
      <form onSubmit={addForm}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddMovie;
