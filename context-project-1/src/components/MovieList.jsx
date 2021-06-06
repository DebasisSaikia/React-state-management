import React from "react";
import { useState } from "react";
import Movie from "./Movie";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: "Inception",
      price: "120",
      id: 3445,
    },
    {
      name: "Interstellar",
      price: "150",
      id: 4245,
    },
    {
      name: "Italian Job",
      price: "350",
      id: 2343,
    },
    {
      name: "gravity",
      price: "138",
      id: 1243,
    },
  ]);
  return (
    <div>
      {movies.map((movie) => {
        return <Movie name={movie.name} price={movie.price} key={movie.id} />;
      })}
    </div>
  );
};

export default MovieList;
