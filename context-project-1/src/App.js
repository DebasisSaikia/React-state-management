import "./App.css";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";
import { MovieProvider } from "./components/MovieContext";
import AddMovie from "./components/AddMovie";
function App() {
  return (
    <MovieProvider>
      <Nav />
      <MovieList />
      <AddMovie />
    </MovieProvider>
  );
}

export default App;
