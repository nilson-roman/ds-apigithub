import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import GitSearch from "pages/GitSearch";
import Navbar from "components/Navbar";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/gitsearch" exact>
          <GitSearch />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
