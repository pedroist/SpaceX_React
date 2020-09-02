import * as React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Launches from "./pages/launches";
import Rockets from "./pages/rockets";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <div>
              <NavLink to="/">Launches</NavLink>|
              <NavLink to="/rockets">Rockets</NavLink>
            </div>
          </div>
          <Route exact path="/" component={Launches} />
          <Route path="/rockets" component={Rockets} />
        </BrowserRouter>
      </div>
    );
  }
}
