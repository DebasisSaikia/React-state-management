import { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
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
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
