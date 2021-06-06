import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return <div>Number of movies :{movies.length}</div>;
};

export default Nav;
