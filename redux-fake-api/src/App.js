import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductLists from "./containers/ProductLists";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ProductLists} />
        <Route exact path="/products/:productsId" component={ProductDetails} />
        <Route>Error !! 404 not found</Route>
      </Switch>
    </Router>
  );
}

export default App;
