import React, { Component } from "react";

const timeout = 3000;

const AlertContext = React.createContext({
  alerts: [],
  popAlert: (id, data) => {}
});

const AlertConsumer = AlertContext.Consumer;

class AlertProvider extends Component {
  constructor(state) {
    super(state);
    this.state = { alerts: [] };
  }

  popAlert = (id, data) => {
    this.setState({
      alerts: [...this.state.alerts, { id: id, data }]
    });
    setTimeout(() => this.removeAlert(id), timeout);
  };

  removeAlert = id => {
    this.setState({
      alerts: this.state.alerts.filter(item => item.id !== id)
    });
  };

  render() {
    const { children } = this.props;
    return (
      <AlertContext.Provider
        value={{
          alerts: this.state.alerts,
          popAlert: this.popAlert
        }}
      >
        {children}
      </AlertContext.Provider>
    );
  }
}

export { AlertProvider, AlertConsumer };
