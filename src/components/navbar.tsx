import * as React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Launches from "../pages/launches";

const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <div>
            <Link to="/">Launches</Link>|<Link to="/rockets">Rockets</Link>
          </div>
          <Switch>
            <Route path="/" component={Launches} />
            <Route path="/rockets" component={Launches} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
