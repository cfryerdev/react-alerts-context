import React, { Component, Fragment } from "react";
import { useState } from "react";
import uuidv4 from "uuid/v4";
import { AlertConsumer } from "../Contexts/AlertContext";

export default class Demo extends Component {
  static contextType = AlertConsumer;

  types = ["danger", "success", "warning", "info", "primary", "secondary"];

  buttonClick = () => {
    this.context.popAlert(uuidv4(), {
      type: this.types[Math.floor(Math.random() * this.types.length)],
      title: "Some Title",
      text: "Here is some alert text."
    });
  };

  render() {
    return (
      <div style={{ margin: 10 }}>
        <button className="btn btn-success" onClick={this.buttonClick}>
          Random Alert
        </button>
      </div>
    );
  }
}
