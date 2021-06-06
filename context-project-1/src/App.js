import "./App.css";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";
import { MovieProvider } from "./components/MovieContext";
function App() {
  return (
    <MovieProvider>
      <Nav />
      <MovieList />
    </MovieProvider>
  );
}

export default App;
