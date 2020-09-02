import * as React from "react";
import "./App.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Launches from "./pages/launches";
import Rockets from "./pages/rockets";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Launches} />
        <Route path="/rockets" component={Rockets} />
      </BrowserRouter>
      // </div>
    );
  }
}
