import * as React from "react";
import Launches from "./pages/launches";
import Navbar from "./components/navbar";
export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Launches></Launches>
      </React.Fragment>
    );
  }
}
