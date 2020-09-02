import * as React from "react";
import * as ReactDOM from "react-dom";
// require('./styles/index.css');
import "./styles/index.scss";
import { Provider } from "react-redux";
import App from "./App";
import { configureStore } from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
  <div>
    <nav className="nav-root">
      <ul className="menu">
        <li>
          <a href="/">Launches</a>
        </li>
        <li>
          <a href="/rockets">Rockets</a>
        </li>
      </ul>
    </nav>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById("root")
);
