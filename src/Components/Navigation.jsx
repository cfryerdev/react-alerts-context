import React, { Fragment } from "react";
import { AlertConsumer } from "../Contexts/AlertContext";
import Alert from "./Alert";

export default () => (
  <Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">Alerts Example</span>
    </nav>
    <AlertConsumer>
      {({ alerts }) => (
        <div className="alert-container">
          {alerts.map(item => {
            const { data } = item;
            return <Alert key={item.id} {...{ data }} />;
          })}
        </div>
      )}
    </AlertConsumer>
  </Fragment>
);
