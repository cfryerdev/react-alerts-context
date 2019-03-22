import React, { Fragment, Component } from "react";
import { render } from "react-dom";
import { AlertProvider } from "./Contexts/AlertContext";
import Navigation from "./Components/Navigation";
import Demo from "./Components/Demo";

import "./Content/styles.css";

class App extends Component {
  render() {
    return (
      <AlertProvider>
        <Navigation />
        <Demo />
      </AlertProvider>
    );
  }
}

render(<App />, document.getElementById("root"));
